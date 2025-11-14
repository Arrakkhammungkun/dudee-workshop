// hooks/useLocalStorage.ts
import { useSyncExternalStore, useRef, useCallback } from "react";

export default function useLocalStorage<T>(
  key: string,
  initialValue: T
): [T, (value: T | ((val: T) => T)) => void] {
  const cache = useRef<T | null>(null);
  const isInitialized = useRef(false);

  const getSnapshot = useCallback(() => {
    if (!isInitialized.current) {
      if (typeof window === "undefined") {
        cache.current = initialValue;
      } else {
        try {
          const item = localStorage.getItem(key);
          cache.current = item ? JSON.parse(item) : initialValue;
        } catch {
          cache.current = initialValue;
        }
      }
      isInitialized.current = true;
    }
    return cache.current!;
  }, [key, initialValue]);

  const subscribe = useCallback(
    (callback: () => void) => {
      const handler = (e: StorageEvent) => {
        if (e.key === key && e.storageArea === localStorage) {
          try {
            cache.current = e.newValue ? JSON.parse(e.newValue) : initialValue;
          } catch {
            cache.current = initialValue;
          }
          callback();
        }
      };
      window.addEventListener("storage", handler);
      return () => window.removeEventListener("storage", handler);
    },
    [key, initialValue]
  );

  const store = useSyncExternalStore(subscribe, getSnapshot, () => initialValue);

  const setValue = useCallback(
    (value: T | ((val: T) => T)) => {
      try {
        const valueToStore = value instanceof Function ? value(store) : value;
        cache.current = valueToStore;

        if (typeof window !== "undefined") {
          const json = JSON.stringify(valueToStore);
          localStorage.setItem(key, json);
        
          window.dispatchEvent(
            new StorageEvent("storage", {
              key,
              newValue: json,
              storageArea: localStorage,
            })
          );
        }
      } catch (e) {
        console.warn(`localStorage [${key}]:`, e);
      }
    },
    [key, store]
  );

  return [store, setValue];
}
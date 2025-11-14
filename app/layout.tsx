import { ReactNode } from "react";
import "./globals.css";

interface LayoutProps {
   children:ReactNode;
}

export default function RootLayout({
  children,
}: Readonly<LayoutProps>) {
  return (
    <html lang="en">
      <body>
       {children}
      </body>
    </html>
  );
}

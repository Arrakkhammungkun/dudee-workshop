import "server-only";  //ต้องใส่ทุกpage 
import TodoScreen from "@/app/screens/todo-screen";

export default function Home() {
  return (
    <div >
      <div className="">
       <TodoScreen />
      </div>
    </div>
  );
}

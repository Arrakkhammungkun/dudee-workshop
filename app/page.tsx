import "server-only";  //ต้องใส่ทุกpage 
import RoomList from "./container/room-list";

export default function Home() {
  return (
    <div >
      <div className="">
        <RoomList/>
      </div>
    </div>
  );
}

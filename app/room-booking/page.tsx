import "server-only";  //ต้องใส่ทุกpage 
import RoomBookingList from "../container/room-booking-ilst";

export default function RoomBooking() {
  return (
    <div >
      <div>
         <RoomBookingList />
      </div>
    </div>
  );
}

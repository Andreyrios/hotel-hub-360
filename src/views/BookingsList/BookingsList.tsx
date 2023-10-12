import { useEffect } from "react";
// Styles
import styles from "./BookingsList.module.css"
// Components
import Loader from "../../components/Loader/Loader";
import CardBooking from "./CardBooking/CardBooking";
import TitleView from "../../components/TitleView/TitleView";
import ContainerList from "../../components/ContainerList/ContainerList";
import ContainerTitleView from "../../components/ContainerTitleView/ContainerTitleView";
// Libraries
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
// Custom Hooks
// Interfaces
import { ItemBooking } from "../../interfaces/generalInterfaces";

const listBooking: ItemBooking[] = [
  {
    user_id: 1,
    room_id: 26879,
    quantity_room: 1,
    number_guests: 2,
    price: "272.00",
    created_at: "2023-09-20T16:50:51.928Z",
    checkIn: "2023-10-01T16:44:47.911Z",
    checkOut: "2023-10-12T03:09:16.352Z",
    comment: "Excepturi iure sint voluptatibus qui iure et.",
    id: 1
  },
  {
    user_id: 2,
    room_id: 68418,
    quantity_room: 1,
    number_guests: 3,
    price: "447.00",
    created_at: "2023-10-02T17:05:00.748Z",
    checkIn: "2023-10-10T19:12:53.239Z",
    checkOut: "2023-10-18T07:51:03.834Z",
    comment: "Labore sint omnis animi nesciunt at iste.",
    id: 2
  },
  {
    user_id: 3,
    room_id: 68419,
    quantity_room: 1,
    number_guests: 2,
    price: "447.00",
    created_at: "2023-10-19T17:05:00.748Z",
    checkIn: "2023-10-24T19:12:53.239Z",
    checkOut: "2023-10-26T07:51:03.834Z",
    comment: "Labore sint omnis animi nesciunt at iste.",
    id: 3
  },
]

function BookingsList() {
  const navigate = useNavigate();

  return (
    <div className={styles.main}>
      {/* <Loader show={loading} /> */}
      <ContainerTitleView>
        <TitleView text='Reservas' Icon={FaArrowLeft} onClick={() => navigate(-1)} />
      </ContainerTitleView>
      <ContainerList>
        {listBooking.length !== 0 &&
          <>
            {listBooking.map((booking: ItemBooking) => {
              return (
                <CardBooking key={booking.id} item={booking} />
              )
            })}
          </>
        }
      </ContainerList>
    </div>
  );
}

export default BookingsList;
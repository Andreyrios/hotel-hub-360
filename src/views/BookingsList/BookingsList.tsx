import { useEffect } from "react";
// Styles
import styles from "./BookingsList.module.css"
// Components
import Loader from "../../components/Loader/Loader";
import CardBooking from "./CardBooking/CardBooking";
import TitleView from "../../components/TitleView/TitleView";
import ContainerList from "../../components/ContainerList/ContainerList";
import ContainerTitleView from "../../components/ContainerTitleView/ContainerTitleView";
import ModalDetailBooking from "../../components/ModalDetailBooking/ModalDetailBooking";
// Libraries
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
// Custom Hooks
import useBookings from "../../hooks/useBookings";
// Interfaces
import { ItemBooking } from "../../interfaces/generalInterfaces";

function BookingsList() {
  const navigate = useNavigate();

  const {
    users,
    booking,
    loading,
    listBookings,
    apiGetBooking,
    apiGetBooKingsList,
    isModalDetailBooking,
    setIsModalDetailBooking,
  } = useBookings()

  useEffect(() => {
    apiGetBooKingsList()
  }, [apiGetBooKingsList])

  return (
    <div className={styles.main}>
      <Loader show={loading} />
      {JSON.stringify(booking) !== '{}' && booking && users?.length !== 0 && users &&
        <ModalDetailBooking
          users={users}
          dataBooking={booking}
          show={isModalDetailBooking}
          onHide={() => setIsModalDetailBooking(false)}
        />
      }
      <ContainerTitleView>
        <TitleView text='Reservas' Icon={FaArrowLeft} onClick={() => navigate(-1)} />
      </ContainerTitleView>
      <ContainerList>
        {listBookings?.map((booking: ItemBooking) => {
          return (
            <CardBooking
              key={booking.id} item={booking}
              onClick={() => apiGetBooking(booking.id)}
            />
          )
        })}
      </ContainerList>
    </div>
  );
}

export default BookingsList;
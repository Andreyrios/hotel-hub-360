import { useState } from "react";
// Styles
import styles from "./CustomerView.module.css"
// Components
import Loader from "../../components/Loader/Loader";
import TitleView from "../../components/TitleView/TitleView";
import ContainerList from "../../components/ContainerList/ContainerList";
import CustomCardHotelRoom from "./components/CustomCardHotelRoom/CustomCardHotelRoom";
import ContainerTitleView from "../../components/ContainerTitleView/ContainerTitleView";
// Custom Hooks
import useCustomerBooking from "../../hooks/useCustomerBooking";
// Interfaces
import { ItemRoomSearch, QuerySearch } from "../../interfaces/generalInterfaces";
import FormSearch from "./components/FormSearch/FormSearch";
// Utils
import { LIST_ROOMS_TO_HOTEL } from "../../utils/listRoomsHotel";
import ModalDetailRoomToBooking from "../../components/ModalDetailRoomToBooking/ModalDetailRoomToBooking";

function CustomerView() {
  const {
    loading,
    dataRoomToBooking,
    openModalWithDataRoom,
    isModalCustomerBooking,
    setIsModalCustomerBooking,
    apiCreateCustomerBooking } = useCustomerBooking();

  const today = new Date().toISOString().substr(0, 10);

  const initialHotelRoomList: ItemRoomSearch[] = LIST_ROOMS_TO_HOTEL
  const [hotelRoomList, setHotelRoomList] = useState<ItemRoomSearch[]>(initialHotelRoomList);
  const [querySearch, setQuerySearch] = useState<QuerySearch>({
    city: '',
    checkOut: today,
    checkIn: today,
    guestsQuantity: ''
  })

  const handleChange = (name: string, value: string) => {
    setQuerySearch({
      ...querySearch,
      [name]: value
    })
  }

  const handleSearch = () => {
    if (querySearch.city === '' && querySearch.guestsQuantity === '') {
      setHotelRoomList(initialHotelRoomList)
      return
    }

    const filteredHotels = initialHotelRoomList.filter((hotel) => {
      if (querySearch.city === '' && querySearch.guestsQuantity !== '') {
        return hotel.number_guests === +querySearch.guestsQuantity;
      }

      if (querySearch.city !== '' && querySearch.guestsQuantity === '') {
        return hotel.city.toLowerCase().includes(querySearch.city.toLowerCase())
      }

      return hotel.city.toLowerCase().includes(querySearch.city.toLowerCase()) &&
        hotel.number_guests === +querySearch.guestsQuantity;
    });

    setHotelRoomList(filteredHotels)
  }

  const handleReset = () => {
    setHotelRoomList(initialHotelRoomList);
    setQuerySearch({
      city: '',
      checkOut: today,
      checkIn: today,
      guestsQuantity: ''
    })
  };

  return (
    <div className={styles.main}>
      {dataRoomToBooking &&
        <ModalDetailRoomToBooking
          data={dataRoomToBooking}
          querySearch={querySearch}
          show={isModalCustomerBooking}
          apiCreateCustomerBooking={apiCreateCustomerBooking}
          onHide={() => setIsModalCustomerBooking(false)}
        />
      }
      <Loader show={loading} />
      <ContainerTitleView>
        <TitleView text='Buscar hoteles' />
      </ContainerTitleView>
      <FormSearch
        querySearch={querySearch}
        handleChange={handleChange}
        onClick={() => handleReset()}
        mainOnClick={() => handleSearch()}
      />
      <ContainerList className={styles.customClass}>
        {hotelRoomList?.map((hotelRoom: ItemRoomSearch) => {
          return (
            <CustomCardHotelRoom
              key={hotelRoom.id} item={hotelRoom}
              onClick={() => openModalWithDataRoom(hotelRoom)}
              onClickIcon={() => openModalWithDataRoom(hotelRoom)}
            />
          )
        })}
      </ContainerList>
    </div>
  );
}

export default CustomerView;
import { useEffect, useState } from "react";
// Styles
import styles from "./CustomerView.module.css"
// Components
import Loader from "../../components/Loader/Loader";
import FormSearch from "./components/FormSearch/FormSearch";
import TitleView from "../../components/TitleView/TitleView";
import ContainerList from "../../components/ContainerList/ContainerList";
import CustomCardHotelRoom from "./components/CustomCardHotelRoom/CustomCardHotelRoom";
import CustomCardHotel from "../HotelsList/components/CustomCardHotel/CustomCardHotel";
import ContainerTitleView from "../../components/ContainerTitleView/ContainerTitleView";
import ModalDetailRoomToBooking from "../../components/ModalDetailRoomToBooking/ModalDetailRoomToBooking";
// Custom Hooks
import useHotels from "../../hooks/useHotels";
import useCustomerBooking from "../../hooks/useCustomerBooking";
// Interfaces
import { ItemHotel, ItemRoom, QuerySearch } from "../../interfaces/generalInterfaces";
// Libraries
import { FaArrowLeft } from "react-icons/fa";

function CustomerView() {
  const {
    loading,
    listRooms,
    apiGetRoomsList,
    dataRoomToBooking,
    openModalWithDataRoom,
    isModalCustomerBooking,
    apiCreateCustomerBooking,
    setIsModalCustomerBooking } = useCustomerBooking();

  const { listHotels, apiGetHotelsList } = useHotels()

  const [typeView, setTypeView] = useState('')

  const today = new Date().toISOString().substr(0, 10);

  const [hotelRoomList, setHotelRoomList] = useState<ItemHotel[]>(listHotels);
  const [roomList, setRoomList] = useState<ItemRoom[]>(listRooms);
  const [dataHotel, setDataHotel] = useState<ItemHotel>();
  const [querySearch, setQuerySearch] = useState<QuerySearch>({
    city: '',
    checkOut: today,
    checkIn: today,
    guestsQuantity: ''
  })

  useEffect(() => {
    apiGetHotelsList()
  }, [apiGetHotelsList])

  useEffect(() => {
    setHotelRoomList(listHotels)
  }, [listHotels])

  useEffect(() => {
    setRoomList(listRooms)
  }, [listRooms])

  useEffect(() => {
    setTypeView('')
  }, [querySearch.city])

  const handleChange = (name: string, value: string) => {
    setQuerySearch({
      ...querySearch,
      [name]: value
    })
  }

  const handleSearch = () => {
    if (querySearch.city === '' && querySearch.guestsQuantity === '') {
      setHotelRoomList(listHotels)
      setRoomList(listRooms)
      return
    }

    const filteredHotels = listHotels.filter((hotel) => {
      return hotel.city.toLowerCase().includes(querySearch.city.toLowerCase())
    });

    const filteredRooms = listRooms.filter((room) => {
      if (querySearch.city === '' && querySearch.guestsQuantity !== '') {
        return +room.number_guests >= +querySearch.guestsQuantity;
      }

      return +room.number_guests >= +querySearch.guestsQuantity;
    });

    setRoomList(filteredRooms)
    setHotelRoomList(filteredHotels)
  }

  const handleReset = () => {
    setHotelRoomList(listHotels);
    setQuerySearch({
      city: '',
      checkOut: today,
      checkIn: today,
      guestsQuantity: ''
    })
    setTypeView('')
  };

  return (
    <div className={styles.main}>
      {dataRoomToBooking &&
        <ModalDetailRoomToBooking
          dataHotel={dataHotel}
          data={dataRoomToBooking}
          querySearch={querySearch}
          show={isModalCustomerBooking}
          apiCreateCustomerBooking={apiCreateCustomerBooking}
          onHide={() => setIsModalCustomerBooking(false)}
        />
      }
      <Loader show={loading} />
      <ContainerTitleView>
        <TitleView
          onClick={() => setTypeView('')}
          Icon={typeView !== '' ? FaArrowLeft : null}
          text={typeView !== '' ? typeView : 'Buscar hoteles'}
        />
      </ContainerTitleView>
      <FormSearch
        querySearch={querySearch}
        handleChange={handleChange}
        onClick={() => handleReset()}
        mainOnClick={() => handleSearch()}
      />
      <ContainerList className={styles.customClass}>
        {typeView === '' ?
          <>
            {hotelRoomList?.map((hotel: ItemHotel) => {
              return (
                hotel.available &&
                <CustomCardHotel
                  key={hotel.id} item={hotel}
                  onClick={async () => {
                    setDataHotel(hotel)
                    await apiGetRoomsList(hotel.id)
                    await setTypeView(hotel.name)
                  }}
                />
              )
            })}
          </>
          :
          <>
            {roomList?.map((hotelRoom: ItemRoom) => {
              return (
                hotelRoom.available && +hotelRoom.number_guests >= +querySearch.guestsQuantity &&
                <CustomCardHotelRoom
                  key={hotelRoom.id} item={hotelRoom}
                  onClick={() => openModalWithDataRoom(hotelRoom)}
                  onClickIcon={() => openModalWithDataRoom(hotelRoom)}
                />
              )
            })}
          </>
        }
      </ContainerList>
    </div>
  );
}

export default CustomerView;
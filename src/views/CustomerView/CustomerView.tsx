import { useEffect, useState } from "react";
// Styles
import styles from "./CustomerView.module.css"
// Components
import Loader from "../../components/Loader/Loader";
import TitleView from "../../components/TitleView/TitleView";
import ContainerList from "../../components/ContainerList/ContainerList";
import CustomCardHotelRoom from "./components/CustomCardHotelRoom/CustomCardHotelRoom";
import ContainerTitleView from "../../components/ContainerTitleView/ContainerTitleView";
import ModalCreateEditHotel from "../../components/ModalCreateEditHotel/ModalCreateEditHotel";
// Custom Hooks
import useHotels from "../../hooks/useHotels";
// Interfaces
import { ItemRoomSearch, QuerySearch } from "../../interfaces/generalInterfaces";
import FormSearch from "./components/FormSearch/FormSearch";
// Utils
import { LIST_ROOMS_TO_HOTEL } from "../../utils/listRoomsHotel";

function CustomerView() {
  const {
    hotel,
    loading,
    // listHotels,
    apiGetHotel,
    apiUpdateHotel,
    apiCreateHotel,
    apiGetHotelsList,
    isModalCreateHotel,
    isModalDetailHotel,
    setIsModalDetailHotel,
    setIsModalCreateHotel, } = useHotels();

  const today = new Date().toISOString().substr(0, 10);

  const initialHotelRoomList: ItemRoomSearch[] = LIST_ROOMS_TO_HOTEL
  const [hotelRoomList, setHotelRoomList] = useState<ItemRoomSearch[]>(initialHotelRoomList);
  const [querySearch, setQuerySearch] = useState<QuerySearch>({
    city: '',
    checkOut: '',
    checkIn: today,
    guestsQuantity: ''
  })


  useEffect(() => {
    apiGetHotelsList();
  }, [apiGetHotelsList]);

  const handleChange = (name: string, value: string) => {
    setQuerySearch({
      ...querySearch,
      [name]: value
    })
  }

  const HandleSearch = () => {
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
      ...querySearch,
      city: '',
      guestsQuantity: ''
    })
  };

  return (
    <div className={styles.main}>
      {hotel &&
        <ModalCreateEditHotel
          dataHotelProps={hotel}
          show={isModalDetailHotel}
          title='Información del hotel'
          mainClick={(dataHotela: any) => {
            apiUpdateHotel(dataHotela)
          }}
          onHide={() => setIsModalDetailHotel(false)}
        />
      }
      <ModalCreateEditHotel
        title='Crear hotel'
        show={isModalCreateHotel}
        mainClick={(dataHotela: any) => {
          apiCreateHotel(dataHotela)
        }}
        onHide={() => setIsModalCreateHotel(false)}
      />
      <Loader show={loading} />
      <ContainerTitleView>
        <TitleView text='Buscar hoteles' />
      </ContainerTitleView>
      <FormSearch mainOnClick={() => HandleSearch()} onClick={() => handleReset()} handleChange={handleChange} querySearch={querySearch} />
      <ContainerList customStyle={{ height: 'calc(100vh - 240px)' }}>
        {hotelRoomList?.map((hotelRoom: ItemRoomSearch) => {
          return (
            <CustomCardHotelRoom
              key={hotelRoom.id} item={hotelRoom}
              onClick={() => apiGetHotel(+hotelRoom.id)}
              onClickIcon={() => {
                const isAvailableApi = true
                apiUpdateHotel(hotel, isAvailableApi)
              }}
            />
          )
        })}
      </ContainerList>
    </div>
  );
}

export default CustomerView;
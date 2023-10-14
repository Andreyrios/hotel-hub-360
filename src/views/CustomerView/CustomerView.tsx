import { useEffect, useState } from "react";
// Styles
import styles from "./CustomerView.module.css"
// Components
import Loader from "../../components/Loader/Loader";
import TitleView from "../../components/TitleView/TitleView";
import ContainerList from "../../components/ContainerList/ContainerList";
import CustomCardHotel from "./components/CustomCardHotel/CustomCardHotel";
import ContainerTitleView from "../../components/ContainerTitleView/ContainerTitleView";
import ModalCreateEditHotel from "../../components/ModalCreateEditHotel/ModalCreateEditHotel";
// Libraries
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft, FaPlus } from "react-icons/fa";
// Custom Hooks
import useHotels from "../../hooks/useHotels";
// Interfaces
import { ItemHotel, QuerySearch } from "../../interfaces/generalInterfaces";
import FormSearch from "./components/FormSearch/FormSearch";

function CustomerView() {
  const {
    hotel,
    loading,
    listHotels,
    apiGetHotel,
    apiUpdateHotel,
    apiCreateHotel,
    apiGetHotelsList,
    isModalCreateHotel,
    isModalDetailHotel,
    setIsModalDetailHotel,
    setIsModalCreateHotel, } = useHotels();
  const navigate = useNavigate();

  const today = new Date().toISOString().substr(0, 10);

  const [querySearch, setQuerySearch] = useState<QuerySearch>({
    city: '',
    checkOut: '',
    checkIn: today,
    guestsQuantity: 1
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
      <FormSearch handleChange={handleChange} querySearch={querySearch} />
      <p>
        {JSON.stringify(querySearch)}
      </p>
      {/* <ContainerList>
        {listHotels?.map((hotel: ItemHotel) => {
          return (
            <CustomCardHotel
              key={hotel.id} item={hotel}
              onClick={() => apiGetHotel(hotel.id)}
              onClickIcon={() => {
                const isAvailableApi = true
                apiUpdateHotel(hotel, isAvailableApi)
              }}
            />
          )
        })}
      </ContainerList> */}
    </div>
  );
}

export default CustomerView;
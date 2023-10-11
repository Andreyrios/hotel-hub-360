import { useEffect, useState } from "react";
// Styles
import styles from "./HotelsList.module.css"
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
import { ItemHotel } from "../../interfaces/generalInterfaces";

function HotelsList() {
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


  useEffect(() => {
    apiGetHotelsList();
  }, []);

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
        <TitleView text='Hoteles' Icon={FaArrowLeft} onClick={() => navigate(-1)} />
        <Button className="m-0" variant="success" onClick={() => setIsModalCreateHotel(true)} >
          <FaPlus /> Crear Hotel
        </Button>
      </ContainerTitleView>
      <ContainerList>
        {listHotels.length !== 0 &&
          <>
            {listHotels.map((hotel: ItemHotel) => {
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
          </>
        }
      </ContainerList>
    </div>
  );
}

export default HotelsList;
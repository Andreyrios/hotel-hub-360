import { useEffect, useState } from "react";
// Styles
import styles from "./HotelsList.module.css"
// Components
import Loader from "../../components/Loader/Loader";
import TitleView from "../../components/TitleView/TitleView";
import CustomCard from "../../components/CustomCard/CustomCard";
import ContainerList from "../../components/ContainerList/ContainerList";
import ContainerTitleView from "../../components/ContainerTitleView/ContainerTitleView";
import ModalCreateEditHotel from "../../components/ModalCreateEditHotel/ModalCreateEditHotel";
// Libraries
import { FaPlus } from "react-icons/fa";
import { Button } from "react-bootstrap";
// Custom Hooks
import useHotels from "../../hooks/useHotels";
// Interfaces
import { ItemHotel } from "../../interfaces/generalInterfaces";

const dataToCreateHotel = {
  name: '',
  nit: 0,
  phone: '',
  email: '',
  address: '',
  star: 0,
  available: true,
  image: '',
}

function HotelsList() {
  const { loading, listHotels, apiGetHotel, hotel, setIsModalDetailHotel, isModalDetailHotel } = useHotels();
  const [isModalCreateHotel, setIsModalCreateHotel] = useState(false);

  useEffect(() => {
    if (hotel) {
      setIsModalDetailHotel(true);
    }
  }, [hotel, setIsModalDetailHotel]);

  return (
    <div className={styles.main}>
      {hotel &&
        <ModalCreateEditHotel dataHotelProps={hotel} show={isModalDetailHotel} onHide={() => setIsModalDetailHotel(false)} />
      }
      <ModalCreateEditHotel dataHotelProps={dataToCreateHotel} show={isModalCreateHotel} onHide={() => setIsModalCreateHotel(false)} />
      <Loader show={loading} />
      <ContainerTitleView>
        <TitleView text='Lista de Hoteles' />
        <Button className="m-0" variant="success" onClick={() => setIsModalCreateHotel(true)} >
          <FaPlus /> Crear Hotel
        </Button>
      </ContainerTitleView>
      <ContainerList>
        {listHotels.length !== 0 &&
          <>
            {listHotels.map((hotel: ItemHotel) => {
              return (
                <CustomCard key={hotel.id} item={hotel} onClick={() => apiGetHotel(hotel.id)} />
              )
            })}
          </>
        }
      </ContainerList>
    </div>
  );
}

export default HotelsList;
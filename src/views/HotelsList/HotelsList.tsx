// Styles
import styles from "./HotelsList.module.css"
// Components
import Loader from "../../components/Loader/Loader";
import TitleView from "../../components/TitleView/TitleView";
import CustomCard from "../../components/CustomCard/CustomCard";
import ContainerList from "../../components/ContainerList/ContainerList";
import ContainerTitleView from "../../components/ContainerTitleView/ContainerTitleView";
// Libraries
import { FaPlus } from "react-icons/fa";
import { Button } from "react-bootstrap";
// Custom Hooks
import useHotels from "../../hooks/useHotels";
// Interfaces
import { ItemHotel } from "../../interfaces/generalInterfaces";

function HotelsList() {
  const { loading, listHotels, apiGetHotel, hotel } = useHotels();

  return (
    <div className={styles.main}>
      {hotel?.name}
      <Loader show={loading} />
      <ContainerTitleView>
        <TitleView text='Lista de Hoteles' />
        <Button className="m-0" variant="success" >
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
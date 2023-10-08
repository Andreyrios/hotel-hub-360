// Styles
import styles from "./HotelsList.module.css"
// Components
import TitleView from "../../components/TitleView/TitleView";
import CustomCard from "../../components/CustomCard/CustomCard";
import ContainerList from "../../components/ContainerList/ContainerList";
import ContainerTitleView from "../../components/ContainerTitleView/ContainerTitleView";
import CustomButton from "../../components/CustomButton/CustomButton";
// Libraries
import { FaPlus } from "react-icons/fa";
import { Button } from "react-bootstrap";

function HotelsList() {
  return (
    <div className={styles.main}>
      <ContainerTitleView>
        <TitleView text='Lista de Hoteles' />
        <Button className="m-0" variant="success" >
          <FaPlus /> Crear Hotel
        </Button>
        {/* <CustomButton icon={FaPlus} textButton='Crear Hotel' /> */}
      </ContainerTitleView>
      <ContainerList>
        <CustomCard />
        <CustomCard />
        <CustomCard />
        <CustomCard />
        <CustomCard />
      </ContainerList>
    </div>
  );
}

export default HotelsList;
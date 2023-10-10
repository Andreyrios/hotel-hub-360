import { useEffect } from "react";
// Styles
import styles from "./RoomsList.module.css"
// Components
import Loader from "../../components/Loader/Loader";
import TitleView from "../../components/TitleView/TitleView";
import CustomCardRoom from "./components/CustomCardRoom/CustomCardRoom";
import ContainerList from "../../components/ContainerList/ContainerList";
import ContainerTitleView from "../../components/ContainerTitleView/ContainerTitleView";
import ModalCreateEditHotel from "../../components/ModalCreateEditHotel/ModalCreateEditHotel";
// Libraries
import { FaPlus } from "react-icons/fa";
import { Button } from "react-bootstrap";
import { useLocation } from 'react-router-dom';
// Custom Hooks
import useRooms from "../../hooks/useRooms";
// Interfaces
import { ItemRoom } from "../../interfaces/generalInterfaces";

function RoomsList() {
  const location = useLocation();
  const idHotelPath = location.state.idHotel;

  const {
    room,
    loading,
    listRooms,
    apiGetRoom,
    apiUpdateRoom,
    apiCreateRoom,
    apiGetRoomsList,
    isModalCreateRoom,
    isModalDetailRoom,
    setIsModalCreateRoom,
    setIsModalDetailRoom, } = useRooms({ idHotel: idHotelPath });

  useEffect(() => {
    apiGetRoomsList();
  }, []);

  return (
    <div className={styles.main}>
      {/* {hotel &&
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
      /> */}
      <Loader show={loading} />
      <ContainerTitleView>
        <TitleView text='Habitaciones' />
        <Button className="m-0" variant="success" onClick={() => setIsModalCreateRoom(true)} >
          <FaPlus /> Crear Habitación
        </Button>
      </ContainerTitleView>
      <ContainerList>
        {listRooms.length !== 0 &&
          <>
            {listRooms.map((room: ItemRoom) => {
              return (
                <CustomCardRoom
                  key={room.id} item={room}
                  onClick={() => apiGetRoom(room.hotel_id, room.id)}
                  onClickIcon={() => {
                    const isAvailableApi = true
                    apiUpdateRoom(room, room.id, isAvailableApi)
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

export default RoomsList;
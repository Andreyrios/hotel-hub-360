import { useEffect } from "react";
// Styles
import styles from "./RoomsList.module.css"
// Components
import Loader from "../../components/Loader/Loader";
import TitleView from "../../components/TitleView/TitleView";
import CustomCardRoom from "./components/CustomCardRoom/CustomCardRoom";
import ContainerList from "../../components/ContainerList/ContainerList";
import ContainerTitleView from "../../components/ContainerTitleView/ContainerTitleView";
import ModalCreateEditRoom from "../../components/ModalCreateEditRoom/ModalCreateEditRoom";
// Libraries
import { Button } from "react-bootstrap";
import { FaArrowLeft, FaPlus } from "react-icons/fa";
import { useLocation, useNavigate } from 'react-router-dom';
// Custom Hooks
import useRooms from "../../hooks/useRooms";
// Interfaces
import { ItemRoom } from "../../interfaces/generalInterfaces";

function RoomsList() {
  const location = useLocation();
  const navigate = useNavigate();
  const idHotelPath = location.state?.idHotel;

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
    if (idHotelPath) {
      apiGetRoomsList();
    } else {
      navigate(-1)
    }
  }, []);

  return (
    <div className={styles.main}>
      {idHotelPath &&
        <>
          {room &&
            <ModalCreateEditRoom
              dataRoomProps={room}
              show={isModalDetailRoom}
              title='Información del Habitación'
              mainClick={(room: ItemRoom) => {
                apiUpdateRoom(room, room.id)
              }}
              onHide={() => setIsModalDetailRoom(false)}
            />
          }
          <ModalCreateEditRoom
            title='Crear Habitación'
            show={isModalCreateRoom}
            mainClick={(dataRoom: any) => {
              apiCreateRoom(dataRoom)
            }}
            onHide={() => setIsModalCreateRoom(false)}
          />
          <Loader show={loading} />
          <ContainerTitleView>
            <TitleView text='Habitaciones' Icon={FaArrowLeft} onClick={() => navigate(-1)} />
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
                      onClick={() => apiGetRoom(room.id)}
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
        </>
      }
    </div>
  );
}

export default RoomsList;
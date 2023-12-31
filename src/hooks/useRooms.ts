import { useState, useCallback } from "react";
// Api
import { getRoom } from "../Api/rooms/getRoom";
import { getRooms } from "../Api/rooms/getRooms";
import { updateRoom } from "../Api/rooms/updateRoom";
import { createRoom } from "../Api/rooms/createRoom";
// Interfaces
import { ItemRoom } from "../interfaces/generalInterfaces";
import alertInformation from "../utils/alertInformation";

interface Props {
  idHotel: number
}

function useRooms({ idHotel }: Props) {
  const [room, setRoom] = useState<ItemRoom>()
  const [loading, setLoading] = useState(false);
  const [listRooms, setListRooms] = useState<ItemRoom[]>([]);
  const [isModalDetailRoom, setIsModalDetailRoom] = useState(false);
  const [isModalCreateRoom, setIsModalCreateRoom] = useState(false);

  const apiGetRoomsList = useCallback(async () => {
    setLoading(true);
    try {
      const response = await getRooms(idHotel);
      const { data, errored } = response;
      if (!errored) {
        setListRooms(data);
      } else {
        console.error('Error fetching Hotel:', errored);
        alertInformation({
          icon: 'error',
          title: 'Upps',
          color: 'var(--COLOR-DANGER)',
          message: 'Ha ocurrido un error, pero no te preocupes lo estamos revisando',
        })
      }
    } catch (error) {
      console.error('Error fetching Hotel:', error);
      alertInformation({
        icon: 'error',
        title: 'Upps',
        color: 'var(--COLOR-DANGER)',
        message: 'Ha ocurrido un error, pero no te preocupes lo estamos revisando',
      })
    } finally {
      setLoading(false);
    }
  }, [idHotel]);

  const apiGetRoom = async (idRoom: number) => {
    setLoading(true);
    try {
      const response = await getRoom(idHotel, idRoom);
      const { data, errored } = response;
      if (!errored) {
        setRoom(data);
        setIsModalDetailRoom(true)
      } else {
        console.error('Error fetching Room:', errored);
        alertInformation({
          icon: 'error',
          title: 'Upps',
          color: 'var(--COLOR-DANGER)',
          message: 'Ha ocurrido un error, pero no te preocupes lo estamos revisando',
        })
      }
    } catch (error) {
      console.error('Error fetching Room:', error);
      alertInformation({
        icon: 'error',
        title: 'Upps',
        color: 'var(--COLOR-DANGER)',
        message: 'Ha ocurrido un error, pero no te preocupes lo estamos revisando',
      })
    } finally {
      setLoading(false);
    }
  };

  const apiUpdateRoom = async (dataRoom: ItemRoom, idRoom: number, isOnlyAvailable?: boolean,) => {
    if (isOnlyAvailable) {
      dataRoom.available = !dataRoom.available
    }
    setLoading(true);
    try {
      const response = await updateRoom(dataRoom, idHotel, idRoom,);
      const { errored } = response;
      if (!errored) {
        apiGetRoomsList()
        setIsModalDetailRoom(false)
        alertInformation({
          icon: 'success',
          title: 'Exitos',
          color: 'var(--SECONDARY-COLOR)',
          message: 'La habitación ha sido actualizado con exito',
        })
      } else {
        console.error('Error fetching Room:', errored);
        alertInformation({
          icon: 'error',
          title: 'Upps',
          color: 'var(--COLOR-DANGER)',
          message: 'Ha ocurrido un error, pero no te preocupes lo estamos revisando',
        })
      }
    } catch (error) {
      console.error('Error fetching Room:', error);
      alertInformation({
        icon: 'error',
        title: 'Upps',
        color: 'var(--COLOR-DANGER)',
        message: 'Ha ocurrido un error, pero no te preocupes lo estamos revisando',
      })
    } finally {
      setLoading(false);
    }
  };

  const apiCreateRoom = async (dataRoom: ItemRoom) => {
    setLoading(true);
    try {
      const response = await createRoom(dataRoom, idHotel);
      const { errored } = response;
      if (!errored) {
        apiGetRoomsList()
        setIsModalCreateRoom(false)
        alertInformation({
          icon: 'success',
          title: 'Exitos',
          color: 'var(--SECONDARY-COLOR)',
          message: 'La habitación ha sido actualizado con exito',
        })
      } else {
        console.error('Error fetching Room:', errored);
        alertInformation({
          icon: 'error',
          title: 'Upps',
          color: 'var(--COLOR-DANGER)',
          message: 'Ha ocurrido un error, pero no te preocupes lo estamos revisando',
        })
      }
    } catch (error) {
      console.error('Error fetching Room:', error);
      alertInformation({
        icon: 'error',
        title: 'Upps',
        color: 'var(--COLOR-DANGER)',
        message: 'Ha ocurrido un error, pero no te preocupes lo estamos revisando',
      })
    } finally {
      setLoading(false);
    }
  };

  return {
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
    setIsModalDetailRoom,
  };
}

export default useRooms;
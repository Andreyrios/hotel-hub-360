import { useCallback, useState } from 'react';
// Api
import { createCustomerBooking } from '../Api/customer/createCustomerBooking';
// Interfaces
import { ItemBooking, ItemRoom } from '../interfaces/generalInterfaces';
import alertInformation from '../utils/alertInformation';
import { getRooms } from '../Api/rooms/getRooms';

function useCustomerBooking() {
  const [loading, setLoading] = useState(false);
  const [listRooms, setListRooms] = useState<ItemRoom[]>([]);
  const [isModalCustomerBooking, setIsModalCustomerBooking] = useState(false);
  const [dataRoomToBooking, setDataRoomToBooking] = useState<ItemRoom>();

  const openModalWithDataRoom = (bookingRoom: ItemRoom) => {
    setLoading(true);
    setDataRoomToBooking(bookingRoom)
    setIsModalCustomerBooking(true)
    setLoading(false);
  };

  const apiCreateCustomerBooking = async (dataToBooking: ItemBooking) => {
    setLoading(true);
    try {
      const response = await createCustomerBooking(dataToBooking);
      const { errored } = response;
      if (!errored) {
        setIsModalCustomerBooking(false)
        alertInformation({
          icon: 'success',
          title: 'En hora buena',
          color: 'var(--SECONDARY-COLOR)',
          message: 'Reserva creada con exito'
        })
      } else {
        console.error('Error fetching Create Booking:', errored);
        alertInformation({
          icon: 'error',
          color: 'var(--COLOR-DANGER)',
          title: 'Upps, ha ocurrido un error',
          message: 'Pero no te preocupes lo estamos revisando'
        })
      }
    } catch (error) {
      console.error('Error fetching Create Booking:', error);
    } finally {
      setLoading(false);
    }
  };

  const apiGetRoomsList = useCallback(async (idHotel: number) => {
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
  }, []);

  return {
    loading,
    dataRoomToBooking,
    openModalWithDataRoom,
    isModalCustomerBooking,
    apiCreateCustomerBooking,
    setIsModalCustomerBooking,
    apiGetRoomsList,
    listRooms,
  }
}

export default useCustomerBooking
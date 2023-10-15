import { useState } from 'react';
// Api
import { createCustomerBooking } from '../Api/customer/createCustomerBooking';
// Interfaces
import { ItemBooking, ItemRoomSearch } from '../interfaces/generalInterfaces';
import alertInformation from '../utils/alertInformation';

function useCustomerBooking() {
  const [loading, setLoading] = useState(false);
  const [isModalCustomerBooking, setIsModalCustomerBooking] = useState(false);
  const [dataRoomToBooking, setDataRoomToBooking] = useState<ItemRoomSearch>();

  const openModalWithDataRoom = (bookingRoom: ItemRoomSearch) => {
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

  return {
    loading,
    dataRoomToBooking,
    openModalWithDataRoom,
    isModalCustomerBooking,
    apiCreateCustomerBooking,
    setIsModalCustomerBooking,
  }
}

export default useCustomerBooking
import { useState } from 'react';
// Interfaces
import { ItemRoomSearch } from '../interfaces/generalInterfaces';

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

  return {
    loading,
    dataRoomToBooking,
    openModalWithDataRoom,
    isModalCustomerBooking,
    setIsModalCustomerBooking,
  }
}

export default useCustomerBooking
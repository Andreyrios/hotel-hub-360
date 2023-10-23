import { useState, useCallback } from "react";
// Api
import { getBooking } from "../Api/bookings/getBooking";
import { getBookings } from "../Api/bookings/getBookings";
// Interfaces
import { ItemBooking } from "../interfaces/generalInterfaces";

function useBookings() {
  const [loading, setLoading] = useState(false);
  const [booking, setBooking] = useState<ItemBooking>();
  const [listBookings, setListBookings] = useState<ItemBooking[]>([]);
  const [isModalDetailBooking, setIsModalDetailBooking] = useState(false);

  const apiGetBooKingsList = useCallback(async () => {
    setLoading(true);
    try {
      const response = await getBookings();
      const { data, errored } = response;
      if (!errored) {
        setListBookings(data);
      } else {
        console.error('Error fetching Booking:', errored);
      }
    } catch (error) {
      console.error('Error fetching Booking:', error);
    } finally {
      setLoading(false);
    }
  }, []);

  const apiGetBooking = async (idBooking: number) => {
    setLoading(true);
    try {
      const response = await getBooking(idBooking);
      const { data, errored } = response;
      if (!errored) {
        setBooking(data);
        setIsModalDetailBooking(true)
      } else {
        console.error('Error fetching Room:', errored);
      }
    } catch (error) {
      console.error('Error fetching Room:', error);
    } finally {
      setLoading(false);
    }
  };

  return {
    booking,
    loading,
    listBookings,
    apiGetBooking,
    apiGetBooKingsList,
    isModalDetailBooking,
    setIsModalDetailBooking,
  };
}

export default useBookings;
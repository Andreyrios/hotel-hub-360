import { useState, useCallback } from "react";
// Api
import { getBooking } from "../Api/bookings/getBooking";
import { getBookings } from "../Api/bookings/getBookings";
import { getUsers } from "../Api/users/getUsers";
// Interfaces
import { ItemBooking, ItemUser } from "../interfaces/generalInterfaces";

function useBookings() {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState<ItemUser[]>();
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
        apiGetUsers()
      } else {
        console.error('Error fetching Room:', errored);
      }
    } catch (error) {
      console.error('Error fetching Room:', error);
    } finally {
      setLoading(false);
    }
  };

  const apiGetUsers = async () => {
    setLoading(true);
    try {
      const response = await getUsers();
      const { data, errored } = response;
      if (!errored) {
        setUsers(data)
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
    users,
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
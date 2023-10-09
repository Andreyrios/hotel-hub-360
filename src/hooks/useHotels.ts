import { useEffect, useState } from "react";
// Api
import { getHotel } from "../Api/hotels/getHotel";
import { getHotels } from "../Api/hotels/getHotels";
// Interfaces
import { ItemHotel } from "../interfaces/generalInterfaces";

function useHotels() {
  const [hotel, setHotel] = useState<ItemHotel>()
  const [loading, setLoading] = useState(false);
  const [listHotels, setListHotels] = useState<ItemHotel[]>([]);

  useEffect(() => {
    apiGetHotelsList();
  }, []);

  const apiGetHotelsList = async () => {
    setLoading(true);
    try {
      const response = await getHotels();
      const { data, errored } = response;
      if (!errored) {
        setListHotels(data);
      } else {
        console.error('Error fetching hotels:', errored);
      }
    } catch (error) {
      console.error('Error fetching hotels:', error);
    } finally {
      setLoading(false);
    }
  };

  const apiGetHotel = async (idHotel: number) => {
    setLoading(true);
    try {
      const response = await getHotel(idHotel);
      const { data, errored } = response;
      if (!errored) {
        setHotel(data);
      } else {
        console.error('Error fetching hotel:', errored);
      }
    } catch (error) {
      console.error('Error fetching hotel:', error);
    } finally {
      setLoading(false);
    }
  };

  return { loading, listHotels, apiGetHotel, hotel };
}

export default useHotels;
import { useCallback, useState } from "react";
import { createHotel } from "../Api/hotels/createHotel";
// Api
import { getHotel } from "../Api/hotels/getHotel";
import { getHotels } from "../Api/hotels/getHotels";
import { updateHotel } from "../Api/hotels/updateHotel";
// Interfaces
import { ItemHotel } from "../interfaces/generalInterfaces";
import alertInformation from "../utils/alertInformation";
import { CreateItemHotel } from './../interfaces/generalInterfaces';

function useHotels() {
  const [hotel, setHotel] = useState<ItemHotel>()
  const [loading, setLoading] = useState(false);
  const [listHotels, setListHotels] = useState<ItemHotel[]>([]);
  const [isModalDetailHotel, setIsModalDetailHotel] = useState(false);
  const [isModalCreateHotel, setIsModalCreateHotel] = useState(false);

  const apiGetHotelsList = useCallback(async () => {
    setLoading(true);
    try {
      const response = await getHotels();
      const { data, errored } = response;
      if (!errored) {
        setListHotels(data);
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

  const apiGetHotel = async (idHotel: number) => {
    setLoading(true);
    try {
      const response = await getHotel(idHotel);
      const { data, errored } = response;
      if (!errored) {
        setHotel(data);
        setIsModalDetailHotel(true)
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
  };

  const apiUpdateHotel = async (dataHotel: any, isOnlyAvailable?: boolean) => {
    if (isOnlyAvailable) {
      dataHotel.available = !dataHotel.available
    }
    setLoading(true);
    try {
      const response = await updateHotel(dataHotel, dataHotel.id);
      const { errored } = response;
      if (!errored) {
        alertInformation({
          icon: 'success',
          title: 'Exitos',
          color: 'var(--SECONDARY-COLOR)',
          message: 'El hotel ha sido actualizado con exito',
        })
        apiGetHotelsList()
        setIsModalDetailHotel(false)
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
  };

  const apiCreateHotel = async (dataHotel: CreateItemHotel) => {
    setLoading(true);
    try {
      const response = await createHotel(dataHotel);
      const { errored } = response;
      if (!errored) {
        alertInformation({
          icon: 'success',
          title: 'Exitos',
          color: 'var(--SECONDARY-COLOR)',
          message: 'El hotel ha sido creado con exito',
        })
        apiGetHotelsList()
        setIsModalCreateHotel(false)
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
  };

  return {
    hotel,
    loading,
    listHotels,
    apiGetHotel,
    apiUpdateHotel,
    apiCreateHotel,
    apiGetHotelsList,
    isModalCreateHotel,
    isModalDetailHotel,
    setIsModalCreateHotel,
    setIsModalDetailHotel,
  };
}

export default useHotels;
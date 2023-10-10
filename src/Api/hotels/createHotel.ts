import settings from "../../config";
import APICallback from "../APICallback";
// Interfaces
import { CreateItemHotel } from "../../interfaces/generalInterfaces";

const METHOD = "POST";
const SUCCESS_STATUS_CODE = 201;
let endPointAPI = settings.endPointServerURL;

function createHotel(dataToSend: CreateItemHotel) {
  const endPoint = `/hotel`;
  let CREATE_HOTEL = endPointAPI + endPoint;
  return APICallback(
    dataToSend,
    CREATE_HOTEL,
    METHOD,
    SUCCESS_STATUS_CODE,
    false,
    '',
    false,
    '',
    false,
    '',
    false,
  );
}

export { createHotel };
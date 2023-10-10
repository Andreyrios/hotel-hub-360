import settings from "../../config";
import APICallback from "../APICallback";
// Interfaces
import { CreateItemHotel } from "../../interfaces/generalInterfaces";

const METHOD = "PUT";
const SUCCESS_STATUS_CODE = 200;
let endPointAPI = settings.endPointServerURL;

function updateHotel(dataToSend: CreateItemHotel, itemId: number) {
  const endPoint = `/hotel/${itemId}`;
  let UPDATE_HOTEL = endPointAPI + endPoint;
  return APICallback(
    dataToSend,
    UPDATE_HOTEL,
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

export { updateHotel };
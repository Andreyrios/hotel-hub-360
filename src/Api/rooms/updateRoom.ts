import settings from "../../config";
import APICallback from "../APICallback";
// Interfaces
import { CreateItemHotel } from "../../interfaces/generalInterfaces";

const METHOD = "PUT";
const SUCCESS_STATUS_CODE = 200;
let endPointAPI = settings.endPointServerURL;

function updateRoom(dataToSend: CreateItemHotel, idHotel: number, idRoom: number) {
  const endPoint = `/api/hotel/${idHotel}/room/${idRoom}`;
  let UPDATE_ROOM = endPointAPI + endPoint;
  return APICallback(
    dataToSend,
    UPDATE_ROOM,
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

export { updateRoom };
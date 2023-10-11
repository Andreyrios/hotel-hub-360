import settings from "../../config";
import APICallback from "../APICallback";
// Interfaces
import { ItemRoom } from "../../interfaces/generalInterfaces";

const METHOD = "POST";
const SUCCESS_STATUS_CODE = 201;
let endPointAPI = settings.endPointServerURL;

function createRoom(dataToSend: ItemRoom, idHotel: number) {
  const endPoint = `/api/hotel/${idHotel}/room`;
  let CREATE_ROOM = endPointAPI + endPoint;
  return APICallback(
    dataToSend,
    CREATE_ROOM,
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

export { createRoom };
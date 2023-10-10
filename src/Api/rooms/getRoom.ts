import settings from "../../config";
import APICallback from "../APICallback";
const METHOD = "GET";
const SUCCESS_STATUS_CODE = 200;
let endPointAPI = settings.endPointServerURL;

function getRoom(idHotel: number, idRoom: number) {
  const endPoint = `/api/hotel/${idHotel}/room/${idRoom}`;
  let GET_ROOM = endPointAPI + endPoint;
  return APICallback(
    {},
    GET_ROOM,
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

export { getRoom };
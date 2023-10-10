import settings from "../../config";
import APICallback from "../APICallback";
const METHOD = "GET";
const SUCCESS_STATUS_CODE = 200;
let endPointAPI = settings.endPointServerURL;

function getRooms(idHotel: number) {
  const endPoint = `/api/hotel/${idHotel}/room`;
  let GET_ROOMS = endPointAPI + endPoint;
  return APICallback(
    {},
    GET_ROOMS,
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

export { getRooms };
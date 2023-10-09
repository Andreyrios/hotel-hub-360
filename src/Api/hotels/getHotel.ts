import settings from "../../config";
import APICallback from "../APICallback";
const METHOD = "GET";
const SUCCESS_STATUS_CODE = 200;
let endPointAPI = settings.endPointServerURL;

function getHotel(idHotel: number) {
  const endPoint = `/api/hotel/${idHotel}`;
  let GET_HOTELS = endPointAPI + endPoint;
  return APICallback(
    {},
    GET_HOTELS,
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

export { getHotel };
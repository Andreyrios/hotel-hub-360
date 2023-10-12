import settings from "../../config";
import APICallback from "../APICallback";
const METHOD = "GET";
const SUCCESS_STATUS_CODE = 200;
let endPointAPI = settings.endPointServerURL;

function getBookings() {
  const endPoint = `/api/booking`;
  let GET_BOOKINGS = endPointAPI + endPoint;
  return APICallback(
    {},
    GET_BOOKINGS,
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

export { getBookings };
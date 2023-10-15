import settings from "../../config";
import APICallback from "../APICallback";
// Interfaces
import { ItemBooking } from "../../interfaces/generalInterfaces";

const METHOD = "POST";
const SUCCESS_STATUS_CODE = 201;
let endPointAPI = settings.endPointServerURL;

function createCustomerBooking(dataToSend: ItemBooking) {
  const endPoint = `/api/booking`;
  let CREATE_CUSTOMER_BOOKING = endPointAPI + endPoint;
  return APICallback(
    dataToSend,
    CREATE_CUSTOMER_BOOKING,
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

export { createCustomerBooking };
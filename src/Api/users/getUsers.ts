import settings from "../../config";
import APICallback from "../APICallback";
const METHOD = "GET";
const SUCCESS_STATUS_CODE = 200;
let endPointAPI = settings.endPointServerURL;

function getUsers() {
  const endPoint = `/api/user`;
  let GET_USERS = endPointAPI + endPoint;
  return APICallback(
    {},
    GET_USERS,
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

export { getUsers };
import settings from "../config";

function APICallback(
  dataToSend,
  endPointAPI,
  method,
  successStateCode,
  requireTokenUserInHeaders,
  tokenUser,
  requireIdUserInHeaders,
  id_user,
  requirePasswordInHeaders,
  password,
  isFile,
) {
  let keys = Object.keys(dataToSend);

  var urlParams = "";
  var data = new FormData();
  if (!isFile) {
    for (var i = 0; i < keys.length; i++) {
      let key = keys[i],
        value = dataToSend[key];

      if (key === 'orders') {
        data.append(key, JSON.stringify(value))
      } else {
        data.append(key, value)
      }

      value = `${value}`.replace("#", "nro");

      if (i !== 0) urlParams += `&`;
      else urlParams += `?`;

      urlParams += `${key}=${value}`;
    }
  } else {
    for (var i = 0; i < keys.length; i++) {
      let key = keys[i];
      let value = dataToSend[key];
      data.append(key, value);
    }
  }

  let headers = {
    Accept: "application/json",
  };

  headers[settings.keyHeaderAuthToken] = settings.headerAuthToken

  if (requireTokenUserInHeaders) {
    headers[settings.keyHeaderDbAuthTokenUser] = `Bearer ${tokenUser}`;
  }
  if (requirePasswordInHeaders) {
    headers[settings.keyHeaderPasswordUser] = password;
  }
  if (requireIdUserInHeaders) {
    headers[settings.keyHeaderIdUser] = id_user;
  }

  let options = {
    method,
    // headers,
  };

  let url = endPointAPI;
  if (method === "POST" || method === "PUT" || method === "PATCH") {
    options.body = data;
  } else if (method === "GET" || method === "DELETE") {
    url += urlParams;
  }

  return fetch(url, options).then(async (response) => {
    return await response.json().then((data) => {
      return {
        errored: response.status !== successStateCode,
        status: response.status,
        data,
      };
    });
  });
}

export default APICallback;
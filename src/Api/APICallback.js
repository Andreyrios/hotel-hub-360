import settings from "../config";

async function APICallback(
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
  try {
    const headers = {
      Accept: "application/json",
      [settings.keyHeaderAuthToken]: settings.headerAuthToken,
    };

    if (requireTokenUserInHeaders) {
      headers[settings.keyHeaderDbAuthTokenUser] = `Bearer ${tokenUser}`;
    }
    if (requirePasswordInHeaders) {
      headers[settings.keyHeaderPasswordUser] = password;
    }
    if (requireIdUserInHeaders) {
      headers[settings.keyHeaderIdUser] = id_user;
    }

    let url = endPointAPI;
    let options = {
      method,
      headers,
    };

    if (method === "POST" || method === "PUT" || method === "PATCH") {
      headers["Content-Type"] = "application/json";
      options.body = JSON.stringify(dataToSend);
    } else if (method === "GET" || method === "DELETE") {
      const queryParams = new URLSearchParams(dataToSend);
      url += "?" + queryParams.toString();
    }

    const response = await fetch(url, options);
    const responseData = await response.json();

    const result = {
      errored: response.status !== successStateCode,
      status: response.status,
      data: responseData,
    };

    return result;
  } catch (error) {
    return {
      errored: true,
      status: 500,
      data: { error: "Internal Server Error" },
    };
  }
}

export default APICallback;
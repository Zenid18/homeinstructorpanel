import * as Url from "./urls";

import axios from "axios";

export const post = async (url, token, body, hide = false) => {
  const headers = token
    ? {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      }
    : {
        "Content-Type": "application/json", 
      };

  const completeUrl = Url.BASE_URL + url;
  const data = JSON.stringify(body);
  // console.log("completeUrl", headers);
  // console.log(data, "kkkk");

  try {
    const response = await axios.post(completeUrl, data, { headers });
    if (response.data.statusCode === 401) {
      window.location.replace("/");
    }
    return response.data;
  } catch (error) {
    // console.log(error);
    return error;
  }
};

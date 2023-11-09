import { authResponse, loginInformation } from "./interfaces";

export const handleLogin = async ({ email, password }: loginInformation) => {
  let authResponse: authResponse = null;
  authResponse = await fetch(
    "http://112.213.91.196:5001/api/v1/authentication/login",
    {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    }
  )
    .then((response) => response.json())
    .then((json) => {
      return json;
    })
    .catch((error) => console.log("error", error));

  return authResponse;
};

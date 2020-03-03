import Cookies from "js-cookie";

const TokenKey = "userInfo";

export function getCookie () {
  return Cookies.get(TokenKey);
}

export function setCookie (token) {
  return Cookies.set(TokenKey, token);
}

export function removeCookie () {
  return Cookies.remove(TokenKey);
}

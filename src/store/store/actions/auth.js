import { setUserToken, resetUser } from "./user";
import { reqLogin, reqLogout } from "@/api/login";
import { setToken, removeToken } from "@/utils/auth";
import storage from "@/utils/storage";
export const login = (username, password) => (dispatch) => {
  return new Promise((resolve, reject) => {
    reqLogin({ username: username.trim(), password: password })
      .then((response) => {
        const { status, message, data } = response;
        if (status) {
          const token = data.token;
          dispatch(setUserToken(token));
          setToken(token);
          storage.set("USER_INFO", data.user)
          resolve(response);
        } else {
          reject(message);
        }
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const logout = (token) => (dispatch) => {
  return new Promise((resolve, reject) => {
    reqLogout(token)
      .then((response) => {
        const { status, message } = response;
        if (status) {
          dispatch(resetUser());
          removeToken();
          resolve(response);
        } else {
          reject(message);
        }
      })
      .catch((error) => {
        reject(error);
      });
  });
};

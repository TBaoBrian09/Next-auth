import axios from "axios";
import { useSession } from "next-auth/react";

const getInstance = (token) => {
  const axiosApiInstance = axios.create();

  axiosApiInstance.interceptors.request.use(
    (config) => {
      if (token && !config.url.includes("authenticate")) {
        config.headers.common = {
          Authorization: `${token}`,
        };
      }
      return config;
    },
    (error) => {
      Promise.reject(error);
    }
  );

  return axiosApiInstance;
};

export default function useAxios() {
  const session = useSession();
  const token = session?.data?.token?.accessToken;
  return getInstance(token);
}

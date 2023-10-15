import { AxiosRequestConfig, AxiosResponse } from "axios";

export const requestInterceptor = (req: AxiosRequestConfig) => {
  const request = {
    ...req,
    headers: { ...req.headers },
  };
  return request;
};

export const responseInterceptor = (res: AxiosResponse) => res;

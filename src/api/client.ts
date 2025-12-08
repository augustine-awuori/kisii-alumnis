import axios, { type AxiosResponse } from "axios";

export interface Response {
  ok: boolean;
  data: unknown;
  problem: string;
}

export interface DataError {
  error: string;
}

export const emptyResponse: Response = {
  ok: false,
  data: [],
  problem: "",
};

const apiClient = axios.create({
  baseURL: "https://campus-hub-api-production.up.railway.app/api",
});

export const processResponse = (res: AxiosResponse) => {
  const response: Response = {
    ok: false,
    data: [],
    problem: "",
  };

  if (!res) return response;

  const { data, status } = res;

  if (status >= 200 && status < 300) {
    response.ok = true;
    response.data = data;
  } else
    response.problem = (response?.data as DataError).error || "Unknown Error";

  return response;
};

export const getFailedResponse = (error: string | unknown): Response => ({
  ...emptyResponse,
  problem: (error as string) || "Unknown error",
});

export default apiClient;

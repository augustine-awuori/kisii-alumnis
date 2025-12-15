import apiClient, { getFailedResponse, processResponse } from "./client";
import type { FormData } from "@/components/AlumniRegistrationForm";

const endpoint = "/alumnis";

const saveAlumni = async (data: FormData) => {
  try {
    return processResponse(await apiClient.post(endpoint, data));
  } catch (error) {
    return getFailedResponse(error);
  }
};

const getAlumnis = async () => {
  try {
    return processResponse(await apiClient.get(endpoint));
  } catch (error) {
    return getFailedResponse(error);
  }
};

const getAlumnisCount = async () => {
  try {
    return processResponse(await apiClient.get(`${endpoint}/count`));
  } catch (error) {
    return getFailedResponse(error);
  }
};

export default { saveAlumni, getAlumnis, getAlumnisCount };

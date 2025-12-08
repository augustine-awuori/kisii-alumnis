import apiClient, { getFailedResponse, processResponse } from "./client";

const endpoint = "/alumnis";

const saveAlumni = async (data: {
  regNo: string;
  name: string;
  school: string;
  course: string;
}) => {
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

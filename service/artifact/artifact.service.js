import { api } from "../api-manager";

export const getArtifacts = async () => {
  const response = await api.get("/artifacts");
  return response.data;
}
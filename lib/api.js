import axios from 'axios'

export const getHello = async () => {
  const response = await axios.get("/api/hello");
  return response.data;
}

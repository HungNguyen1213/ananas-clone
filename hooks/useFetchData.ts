import axios from "axios";

export const fetchData = async (url: string) => {
  const headers = {
    "X-Authorization": process.env.NEXT_PUBLIC_COMMERCE_API_SECRET_KEY,
    Accept: "application/json",
    "Content-Type": "application/json",
  };
  return await axios.get(`${process.env.NEXT_PUBLIC_COMMERCE_BASE_URL}${url}`, {
    headers,
  });
};

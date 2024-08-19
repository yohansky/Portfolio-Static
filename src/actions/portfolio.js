import axios from "axios";
import useSWR from "swr";
const fetcher = (url) =>
  axios.get(url).then(async (res) => {
    // res.data
    const result = await res.data;

    if (res.status !== 200) {
      return Promise.reject(result);
    } else {
      return result;
    }
  });

export function createPortfolio(data) {
  return axios.post("/api/v1/portfolios", data);
}

export function useUpdatePortfolio(id, data) {
  return axios.patch(`/api/v1/portfolios/${id}`, data);
}

export const useGetPortfolio = (id) => {
  const { data, error, ...rest } = useSWR(id ? `/api/v1/portfolios/${id}` : null, fetcher);
  return { data, error, loading: !data && !error, ...rest };
};

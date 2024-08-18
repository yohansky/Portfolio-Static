import axios from "axios";
import useSWR from "swr";
import { fetcher } from "@/actions";

export function createPortfolio(data) {
  return axios.post("/api/v1/portfolios", data);
}

export const useGetPortfolio = (id) => {
  const { data, error, ...rest } = useSWR(id ? `/api/v1/portfolios/${id}` : null, fetcher);
  return { data, error, loading: !data && !error, ...rest };
};

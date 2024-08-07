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

export const useGetPost = () => {
  const { data, error, ...rest } = useSWR("/api/v1/posts", fetcher);
  return { data, error, loading: !data && !error, ...rest };
};

export const useGetPostById = (id) => {
  const { data, error, ...rest } = useSWR(id ? `/api/v1/posts/${id}` : null, fetcher);
  return { data, error, loading: !data && !error, ...rest };
};

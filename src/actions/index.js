import axios from "axios";
import { useEffect, useState } from "react";

export const useGetData = (url) => {
  const [data, setdata] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getData() {
      try {
        const res = await axios.get(url);
        setdata(res.data);
        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    }

    url && getData();
  }, [url]);

  return { data, loading };
};

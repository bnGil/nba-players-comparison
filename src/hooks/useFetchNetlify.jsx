import { useEffect, useState } from "react";
import axios from "axios";

const useFetchNetlify = (endPoint) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const url = `/.netlify/functions/fetchData?endpoint=${endPoint}`;

  useEffect(() => {
    const fetchDataFromNetlify = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get(url);
        setData(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchDataFromNetlify();
  }, []);
  return { data, error, loading };
};
export default useFetchNetlify;

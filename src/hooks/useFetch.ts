import { useEffect, useState } from "react";

/*
   1. accepts url
   2. returns {error loading , data}
*/
type FetchState = {
  loading: boolean;
  error: string | null;
  data: any;
};
export const useFetch = (url: string): FetchState => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState();

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
      }
      const result = await response.json();
      setData(result);
    } catch (error) {
      setError(
        error instanceof Error ? error.message : "something went wrong",
      );
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, [url]);

   return { loading, error, data };
};

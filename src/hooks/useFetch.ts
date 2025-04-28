import axios, { AxiosRequestConfig } from "axios";
import { useCallback, useEffect, useState } from "react";
import { errorParser } from "../lib/errorParser";

export function useFetch<T>(url: string, config?: AxiosRequestConfig) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [refreshTrigger, setRefreshTrigger] = useState(0);

  const refetch = useCallback(() => {
    setRefreshTrigger((prev) => prev + 1);
  }, []);

  useEffect(() => {
    const abortController = new AbortController();

    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await axios.get<T>(url, {
          signal: abortController.signal,
          ...config,
        });

        setData(response.data);
      } catch (err) {
        if (axios.isCancel(err)) {
          console.log("[INFO] Request cancelled");
          return;
        }
        console.error("[ERROR]", err);
        setError(errorParser(err));
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    return () => {
      abortController.abort();
    };
  }, [url, config, refreshTrigger]);

  return { data, loading, error, refetch };
}

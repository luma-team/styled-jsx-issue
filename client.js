import axios from "axios";
import { useState, useEffect } from "react";
import useSWR from "swr";

export const useClient = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  const swrKey = ["hello", mounted];

  const a = async () => {
    const { data } = await axios.get("https://httpbin.org/");
    return data;
  };

  const { data, error, mutate } = useSWR(swrKey, () => a());

  return { data, error, mutate };
};

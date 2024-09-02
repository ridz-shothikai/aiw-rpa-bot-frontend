"use client";

import { useQuery } from "@tanstack/react-query";
import { http } from "./http";

export function useCallApi(url, key, interval) {
  return useQuery({
    queryKey: [key],
    queryFn: async () => {
      const response = await http.get(url);
      return response.data;
    },
    refetchInterval: interval || false,
  });
}

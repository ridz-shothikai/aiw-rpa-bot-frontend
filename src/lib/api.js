"use client";

import { useQuery } from "@tanstack/react-query";
import { http } from "./http";

export function useCallApi(url, key) {
  return useQuery({
    queryKey: [key],
    queryFn: async () => {
      const response = await http.get(url);
      console.log(response)
      return response.data;
    },
  });
}

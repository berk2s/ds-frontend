import { DefinedUseQueryResult, useQuery } from "@tanstack/react-query";
import api from "../api";

const useGetData = <TData>(endpoint: string, queryKey: string[]): any => {
  return useQuery<TData>({
    queryKey: queryKey,
    queryFn: async () => {
      const { data } = await api.get<TData>(endpoint);
      return data;
    },
  });
};

export default useGetData;

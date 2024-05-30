import { useMutation } from "@tanstack/react-query";
import api from "../api";

interface RequestData<TPayload> {
  endpoint: string;
  payload: TPayload;
}

const useDeleteData = <TData>(): any => {
  return useMutation({
    mutationFn: async (requestData: RequestData<any>) => {
      const { data } = await api.delete<TData>(requestData.endpoint);
      return data;
    },
  });
};

export default useDeleteData;

import { useMutation } from "@tanstack/react-query";
import api from "../api";

interface RequestData<TPayload> {
  endpoint: string;
  payload: TPayload;
}

const usePostData = <TData, TPayload>(): any => {
  return useMutation({
    mutationFn: async (requestData: RequestData<TPayload>) => {
      const { data } = await api.post<TData>(
        requestData.endpoint,
        requestData.payload
      );
      return data;
    },
  });
};

export default usePostData;

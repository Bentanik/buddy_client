import axiosInstance from "@/tools/api";

export const getMessageHistoryApi = (form: any) => {
  return axiosInstance.get(
    `/api/message/get_message_history?userReceiveId=${form?.userReceiveId}`
  );
};

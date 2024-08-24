import axiosInstance from "@/tools/api";

export const GetStatusFriendApi = (form: any) => {
  return axiosInstance.get(
    `/api/user/get_status_friend?friendUserId=${form.userId}`
  );
};

export const PostAddFriendApi = (form: any) => {
  return axiosInstance.post(
    `/api/user/add_friend?friendUserId=${form.userId}`
  );
};

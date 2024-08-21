import axiosInstance from "@/tools/api";

export const GetProfilePublicApi = (form: any) => {
  return axiosInstance.get(`/api/profile/get_profile_user?email=${form.email}`);
};

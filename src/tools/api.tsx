import { RefreshTokenApi } from "@/apis/auth/auth";
import { resetAuthState, setToken } from "@/stores/authSlice";
import { store } from "@/stores/store";
import { resetUserState } from "@/stores/userSlice";
import axios from "axios"

let axiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_SERVER
});

axiosInstance.defaults.timeout = 1000 * 60 * 10;
axiosInstance.defaults.withCredentials = true;

axiosInstance.interceptors.request.use((config) => {
    const state = store.getState();
    const token = state.authSlice.token;

    if (token) {
        config.headers.Authorization = `${token.tokenType} ${token.accessToken}`
    }

    return config;
}, (error) => {
    return Promise.reject();
})

let refreshTokenPromise: any = null;

axiosInstance.interceptors.response.use((response) => {
    return response;
}, async (error) => {
    const { config, response: { status } } = error;

    if (status === 401 && config) {
        if (!refreshTokenPromise) {
            refreshTokenPromise = RefreshTokenApi().then((res) => {
                store.dispatch(setToken(res?.data?.data?.token));
                axiosInstance.defaults.headers.Authorization = `${res?.data?.data?.tokenType} ${res?.data?.data?.accessToken}`
            }).catch((err) => {
                store.dispatch(resetAuthState());
                store.dispatch(resetUserState());
                location.href = "/";
                return Promise.reject(err);
            }).finally(() => {
                refreshTokenPromise = null;
            })
        }

        return refreshTokenPromise?.then(() => {
            return axiosInstance(config);
        })
    }

    return Promise.reject(error);
})



export default axiosInstance;
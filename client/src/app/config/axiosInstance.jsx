import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_SERVER_URL,
    withCredentials: true,
});


// Response interceptor
axiosInstance.interceptors.response.use(
    (response) => {
        return response;
    },

    async (error) => {

        const originalRequest = error.config;

        // Access token expired
        if (
            error.response?.status === 401 &&
            !originalRequest._retry &&
            !originalRequest.url.includes("/api/auth/refresh")
        ) {

            originalRequest._retry = true;

            try {

                // Get new access token
                await axiosInstance.post("/api/auth/refresh");

                // Retry original request
                return axiosInstance(originalRequest);

            } catch (refreshError) {

                console.error(
                    "Refresh token failed:",
                    refreshError
                );

                return Promise.reject(refreshError);
            }
        }

        return Promise.reject(error);
    }
);
import axios from "axios";

const httpService = axios.create();
httpService.defaults.baseURL = "https://api.github.com";

httpService.interceptors.request.use(config => {
  if (import.meta.env.VITE_PERSONAL_ACCESS_TOKEN && import.meta.env.VITE_PERSONAL_USER_NM) {
    config.headers.Authorization = `${import.meta.env.VITE_PERSONAL_ACCESS_TOKEN}`;
    config.headers["User-Agent"] = `${import.meta.env.VITE_PERSONAL_USER_NM}`;
  }

  return config;
});

export default httpService;

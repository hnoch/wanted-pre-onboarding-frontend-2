import axios from "axios";

const httpService = axios.create();
httpService.defaults.baseURL = "https://api.github.com";

const { VITE_PERSONAL_ACCESS_TOKEN, VITE_PERSONAL_USER_NM } = import.meta.env;

httpService.interceptors.request.use(config => {
  if (VITE_PERSONAL_ACCESS_TOKEN && VITE_PERSONAL_USER_NM) {
    config.headers.Authorization = `${VITE_PERSONAL_ACCESS_TOKEN}`;
    // config.headers["User-Agent"] = `${VITE_PERSONAL_USER_NM}`;
  }

  return config;
});

export default httpService;

const baseUrl = process.env.VUE_APP_BASE_URL;
const type = "/public/v2";

const api = {
    user: baseUrl + type + "/users",
}

export default api;
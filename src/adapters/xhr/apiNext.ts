import Axios from 'axios';


const apikey = process.env.apiKey;
const baseURL = process.env.apiBaseUrl;
const apinext = Axios.create({
    baseURL,
    params: {
        apikey
    },
});

export { apinext };

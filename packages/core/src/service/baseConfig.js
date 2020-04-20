import axios from 'axios';

const BASE_URL = "https://hacker-news.firebaseio.com/v0";

let instance = axios.create({
    baseURL: BASE_URL,
    timeout: 50000,
    responseType: 'json',
});


export default instance;

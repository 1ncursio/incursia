import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3100';
axios.defaults.withCredentials = true;

const fetcher = (url) => axios.get(url).then((result) => result.data);

export default fetcher;

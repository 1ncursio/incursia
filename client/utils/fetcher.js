import { backUrl } from '@config/config';
import axios from 'axios';

axios.defaults.baseURL = backUrl;
axios.defaults.withCredentials = true;

export const fetcher = (url) => axios.get(url).then((res) => res.data);

export const fetcher2 = (url) => axios.get(url).then((res) => res);

export const fetcherPatch = (url, data) => axios.patch(url, data).then((res) => res.data);

export default fetcher;

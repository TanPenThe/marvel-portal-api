import { MD5 } from 'crypto-js';

const API_URL = process.env.REACT_APP_BASE_URL;
const apiKey = process.env.REACT_APP_API_KEY;
const privateKey = process.env.REACT_APP_PRIVATE_KEY;

const getHash = (ts, privateKey, apiKey) => {
  return MD5(ts + privateKey + apiKey).toString();
}

const initHeroes = async () => {
      const baseURL = `${API_URL}/v1/public/characters`;
      const timestamp = Date.now().toString();
      const hash = getHash(timestamp, privateKey, apiKey);
      const url = `${baseURL}?ts=${timestamp}&apikey=${apiKey}&hash=${hash}&limit=40`;

      try {
            const resp = await fetch(url);
            const data = await resp.json();
            console.log('init data', data);
            return data;
      } catch (err) {
            console.log(err.message);
            return;
      }
}

const heroDetail = async (id) => {
      const baseURL = `${API_URL}/v1/public/characters/${id}`;
      const timestamp = Date.now().toString();
      const hash = getHash(timestamp, privateKey, apiKey);
      const url = `${baseURL}?ts=${timestamp}&apikey=${apiKey}&hash=${hash}`;

      try {
            const resp = await fetch(url);
            const data = await resp.json();
            console.log('hero data', data);
            return data;
      } catch (err) {
            console.log(err.message);
            return;
      }
}
export { initHeroes, heroDetail }
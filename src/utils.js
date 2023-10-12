import axios from "axios";

export const customFetch = axios.create({
  baseURL: `https://rickandmortyapi.com/api/character/`,
});
// 

import axios from "axios";

export const getApiFetch = (url) =>{
    const data = axios.get(url)
    return data;
}
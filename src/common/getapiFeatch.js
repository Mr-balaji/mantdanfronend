import axios from "axios";

export const getApiFetch = (url) =>{
    console.log("url",url);
    const data = axios.get(url)
    return data;
}
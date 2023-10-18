import axios from "axios";

export const PostApiFetch = (url,payloadData) =>{
    const data = axios.post(url,payloadData)
    return data;
}
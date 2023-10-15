import axios from "axios";

export const PostApiFetch = (url,payloadData) =>{
    console.log("payloadData",payloadData);
    const data = axios.post(url,payloadData)
    return data;
}
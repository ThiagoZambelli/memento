import axios from "axios";

const contosAPI = axios.create({ baseURL: "https://lithlez-api.onrender.com/contos" });

export async function getContos() {
    const response = await contosAPI.get('')    
    return response.data
}
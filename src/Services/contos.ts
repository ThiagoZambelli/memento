import axios from "axios";

const contosAPI = axios.create({ baseURL: "https://lithlez-api.onrender.com/" });

export async function getContos() {
    const response = await contosAPI.get('contos')    
    return response.data
}
export async function getConto(id: string) {
    const response = await contosAPI.get(`conto/${id}`)    
    return response.data
}
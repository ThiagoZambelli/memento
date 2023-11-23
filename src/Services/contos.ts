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
export async function likeConto(idConto: string) {
    try {
        const token = sessionStorage.getItem('token');
        await contosAPI.patch(`likeConto/${idConto}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
    }
    catch (err) {
        console.log(err)
    }
}
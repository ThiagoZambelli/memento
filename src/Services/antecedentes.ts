import axios from "axios";

const antecedentesAPI = axios.create({ baseURL: "https://lithlez-api.onrender.com/antecedente" });

export async function getAntecedentes() {
    const response = await antecedentesAPI.get('')    
    return response.data
}
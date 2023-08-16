import axios from "axios";

const classeAPI = axios.create({ baseURL: "https://lithlez-api.onrender.com/classe" });

export async function getClasses() {
    const response = await classeAPI.get('')    
    return response.data
}
import axios from "axios";

const racasAPI = axios.create({ baseURL: "https://lithlez-api.onrender.com/raca" });

export async function getRacas() {
    const response = await racasAPI.get('')    
    return response.data
}
import axios from "axios";

const newsAPI = axios.create({ baseURL: "https://lithlez-api.onrender.com/new" });

export async function getNews() {
    try {
        const response = await newsAPI.get('')
        return response.data;
    }
    catch (err) {
        console.log(err)
    }
}
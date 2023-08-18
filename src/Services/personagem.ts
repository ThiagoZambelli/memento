import axios from "axios";
import IPersonagem from "interface/IPersonagem";

const classeAPI = axios.create({ baseURL: "https://lithlez-api.onrender.com/personagem" });
const token = sessionStorage.getItem('token');
const config = {
    headers: {
        Authorization: `Bearer ${token}` // Adiciona o token ao cabeçalho no formato "Bearer token"
    }
};

export async function postPersonagem(personagem: IPersonagem) {
    try{
        await classeAPI.post('', personagem, config);
    }
    catch(err){
        console.log(err)
    }
}
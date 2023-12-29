import axios from "axios";

const opiniaoAPI = axios.create({ baseURL: "https://lithlez-api.onrender.com/" });

export async function postOpiniao(nome:string, email:string, texto:string) {
    try {
        await opiniaoAPI.post('opiniao', {nome, email, texto});
        return console.log('Enviado!')        
    }
    catch (err) {
        console.log(err)
    }
}
import axios from "axios";
import INovoUser from "interface/INovoUser";

const usuarioAPI = axios.create({ baseURL: "https://lithlez-api.onrender.com/user" });

export async function postUser(novoUser: INovoUser) {
    try {
        const response = await usuarioAPI.post('', novoUser)        
        
        return await response
        
    }
    catch (err) {
        alert(err);
    }
}
import axios from "axios";
import INovoUser from "interface/INovoUser";

const usuarioAPI = axios.create({ baseURL: "https://lithlez-api.onrender.com/user" });
const perfilAPI = axios.create({ baseURL: "https://lithlez-api.onrender.com/" });

export async function postUser(novoUser: INovoUser) {
    try {
        const response = await usuarioAPI.post('', novoUser);
        alert(response.data.menssage);        
        return response.data.menssage
    }
    catch (err) {
        alert(err);
    }
}
export async function getMeuPerfil() {
    const token = sessionStorage.getItem('token');
    try {
        const meuPerfil = await perfilAPI.get('meuPerfil', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        return meuPerfil.data
    }
    catch (err) {
        console.log(err)
    }
}
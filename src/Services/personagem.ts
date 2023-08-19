import axios from "axios";
import IPersonagem from "interface/IPersonagem";


const classeAPI = axios.create({
    baseURL: "https://lithlez-api.onrender.com/"
});

export async function postPersonagem(personagem: IPersonagem) {
    try {        
        const token = sessionStorage.getItem('token');
        await classeAPI.post('personagem', personagem, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
    }
    catch (err) {
        console.log(err)
    }
}
export async function meusPersonagens() {
    const token = sessionStorage.getItem('token');
    try {        
        const listaDePersonagens = await classeAPI.post('meusPersonagens', '', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        return listaDePersonagens.data
    }
    catch (err) {
        console.log(err)
    }
}
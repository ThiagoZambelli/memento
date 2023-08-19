import axios from "axios";
import IPersonagem from "interface/IPersonagem";


const classeAPI = axios.create({
    baseURL: "https://lithlez-api.onrender.com/personagem"
});

export async function postPersonagem(personagem: IPersonagem) {
    const token = sessionStorage.getItem('token');
    try {
        console.log(`Bearer  ${token}`);
        await classeAPI.post('', personagem, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
    }
    catch (err) {
        console.log(err)
    }
}
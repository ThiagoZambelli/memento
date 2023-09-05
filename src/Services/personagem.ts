import axios from "axios";
import IPersonagem from "interface/IPersonagem";


const personagemAPI = axios.create({
    baseURL: "https://lithlez-api.onrender.com/"
});

export async function postPersonagem(personagem: IPersonagem) {
    try {
        const token = sessionStorage.getItem('token');
        await personagemAPI.post('personagem', personagem, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
    }
    catch (err) {
        console.log(err)
    }
}
export async function atualizaAtributos(atributos: number[], id: string) {
    try {
        const token = sessionStorage.getItem('token');
        await personagemAPI.patch('atualizaAtributo', { atributos, id }, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
    }
    catch (err) {
        console.log(err)
    }
}
export async function atualizaPericias(pericias: string[] | [], id: string) {
    try {
        const token = sessionStorage.getItem('token');
        await personagemAPI.patch('atualizaPericias', { pericias, id }, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
    }
    catch (err) {
        console.log(err)
    }
}
export async function atualizaImg(img: string, id: string) {
    try {
        const token = sessionStorage.getItem('token');
        await personagemAPI.patch('atualizaImg', { img, id }, {
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
        const listaDePersonagens = await personagemAPI.post('meusPersonagens', '', {
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
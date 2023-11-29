import axios from "axios";

const contosAPI = axios.create({ baseURL: "https://lithlez-api.onrender.com/" });

export async function getContos() {
    const response = await contosAPI.get('contos')
    return response.data
}
export async function getConto(id: string) {
    const response = await contosAPI.get(`conto/${id}`)
    return response.data
}
export async function likeConto(idConto: string) {
    try {
        const token = sessionStorage.getItem('token');
        await contosAPI.patch(`likeConto/${idConto}`, {}, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
    }
    catch (err) {
        console.log(err)
    }
}
export async function favoritarConto(idConto: string) {
    try {
        const token = sessionStorage.getItem('token');
        await contosAPI.patch(`favoritarConto`, { id: idConto }, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
    }
    catch (err) {
        console.log(err)
    }
}
export async function getContosFavoritos() {
    const token = sessionStorage.getItem('token');
    try {
        const listaDeContosFavoritos = await contosAPI.get('contosFavoritos', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        return listaDeContosFavoritos.data
    }
    catch (err) {
        console.log(err)
    }
}
export async function getListaContosFavoritos() {
    const token = sessionStorage.getItem('token');
    try {
        const listaDeContosFavoritos = await contosAPI.get('listaContosFavoritos', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        return listaDeContosFavoritos.data
    }
    catch (err) {
        console.log(err)
    }
}
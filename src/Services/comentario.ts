import axios from "axios";

const comentarioAPI = axios.create({ baseURL: "https://lithlez-api.onrender.com/comentario" });

interface setComentarioProps {
    nomeUser: string,
    idUser: string,
    idConto: string,
    texto: string
}
interface deletComentarioProps {
    idConto: string,
    idComentario: string
}

export async function setComentario({ idConto, idUser, nomeUser, texto }: setComentarioProps) {
    const atualizacao = {
        nomeUser: nomeUser,
        idUser: idUser,
        idConto: idConto,
        texto: texto
    }
    try {
        await comentarioAPI.post('', atualizacao);        
    }
    catch (err) {
        console.log(err);        
    }
}

export async function deletComentario({idComentario,idConto}:deletComentarioProps) {
    const atualizacao = {
        idComentario: idComentario,
        idConto: idConto
    }
    try {
        await comentarioAPI.patch('', atualizacao);
    }
    catch (err) {
        console.log(err)
    }
}
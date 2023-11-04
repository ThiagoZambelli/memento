import { setComentario } from "Services/comentario";
interface ComentaProps {
    idConto: string,
    nomeUser: string,
    idUser: string,
    texto: string
}

export default function useComenta() {    

    return async ({ idConto, idUser, nomeUser, texto }: ComentaProps) => {
        return await setComentario({ idConto, idUser, nomeUser, texto });        
    }
}
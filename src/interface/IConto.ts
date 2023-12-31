import IComentario from "./IComentario"

export default interface IConto {
    _id: string,
    titulo: string,
    descricao: string,
    capitulos: ICapitulo[],
    img: string,
    curtidas?: string[],
    comentarios?: IComentario[],
    tags?: string[]
}

interface ICapitulo {
    id: string,
    tituloCap: string,
    conteudo: string[]
}

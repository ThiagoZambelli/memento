import { useState } from "react"

interface IValidacao {
    nome: string,
    senha: string,
    confSenha: string,
    email: string
}
interface IValidado {
    nome: string,
    senha: string,
    email: string
}
export default function useValidaUsuario() {
    const [validado, setValidado] = useState<IValidado>();

    return ({ confSenha, email, nome, senha }: IValidacao) => {
        setValidado({
            senha: senha,
            nome: nome,
            email: email
        });
        if (testaSenha(senha, confSenha)) {
            return validado;
        } else {
            return null
        }
    }



}

function testaSenha(senha: string, confSenha: string) {
    return senha === confSenha;
}
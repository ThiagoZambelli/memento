import { postUser } from "Services/usuario";
import { useState } from "react"

interface useCadastroProps {
    nome: string,
    senha: string,
    confSenha: string,
    email: string
}

export default function useCadastro() {
    const [loading, setLoadin] = useState(false);
    const [att, setAtt] = useState<number>(1);
    const [fecha, setFecha] = useState<number>(1);
    const [message, setMessage] = useState('');

    const testaSenha = (senha: string, confSenha: string) => {
        if (senha !== confSenha) {
            setMessage('Digite senhas iguais')
            return false
        } else {
            return true
        }
    }

    const cadastra = async ({ senha, confSenha, email, nome }: useCadastroProps) => {
        setMessage('')
        if (confSenha === '' || email === '' || nome === '' || senha === '') {
            console.log(message)
            setAtt(att + 1)
            setMessage('Complete os campos')
        } else {
            if (testaSenha(senha, confSenha)) {
                const novoUser = { senha, nome, email }
                try {
                    setLoadin(true);
                    let response = await postUser(novoUser);

                    setAtt(att + 1)
                    if (response === 'Usuario cadastrado com sucesso.') {
                        setFecha(fecha + 1)
                    }

                }
                catch (err) {
                    setMessage('Falha no cadastro:' + err)
                    console.log(err)
                    setAtt(att + 1)
                }
            } else if (!testaSenha(senha, confSenha)) {
                setMessage('As senhas devem ser iguais')
                setAtt(att + 1)
            }
        }
        setLoadin(false);
    }



    return {
        loading,
        att,
        message,
        cadastra,
        fecha
    }
}


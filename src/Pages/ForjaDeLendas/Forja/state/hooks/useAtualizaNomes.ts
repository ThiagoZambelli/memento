import useAtualizaPersonagemCriacao from "state/hooks/useAtualizaPersonagemCriacao";

export default function useAtualizaNomes() {
    const atualiza = useAtualizaPersonagemCriacao();

    return (nomesPersonagem: string, nomeJogador: string) => {
        const atualizacao = {
            nomePersonagem: nomesPersonagem,
            nomeJogador: nomeJogador,
        }
        atualiza(atualizacao)
    }
}
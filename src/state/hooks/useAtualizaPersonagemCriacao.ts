import { useRecoilValue, useSetRecoilState } from "recoil";
import { personagemCriacao } from "state/atom";

export default function useAtualizaPersonagemCriacao() {
    const setPersonagem = useSetRecoilState(personagemCriacao);
    const personagemAtual = useRecoilValue(personagemCriacao);

    return (atualizacao: {}) => {
        setPersonagem({ ...personagemAtual, ...atualizacao })
    }
}
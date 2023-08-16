import useAtualizaPersonagemCriacao from "state/hooks/useAtualizaPersonagemCriacao";

export default function useAtualizaAntecedente() {
    const atualiza = useAtualizaPersonagemCriacao();

    return (antecedente: string) => {
        const atualizacao = {
            antecedente: antecedente            
        }
        atualiza(atualizacao)
    };
}
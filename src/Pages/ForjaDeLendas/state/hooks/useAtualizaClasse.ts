import useAtualizaPersonagemCriacao from "state/hooks/useAtualizaPersonagemCriacao";

export default function useAtualizaClasse() {
    const atualiza = useAtualizaPersonagemCriacao();

    return (classe: string) => {
        const atualizacao = {
            classe: classe            
        }
        atualiza(atualizacao)
    };
}
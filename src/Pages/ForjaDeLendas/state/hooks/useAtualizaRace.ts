import useAtualizaPersonagemCriacao from "state/hooks/useAtualizaPersonagemCriacao";

export default function useAtualizaRaca() {
    const atualiza = useAtualizaPersonagemCriacao();

    return (race: string) => {
        const atualizacao = {
            raca: race            
        }
        atualiza(atualizacao)
    };
}
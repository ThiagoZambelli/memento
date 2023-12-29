import { useState } from "react"
import { postOpiniao } from "./opiniao";

export default function useOpiniaoService(){
    const [loading, setLoading] = useState(false);

    const enviar = async (nome:string, email:string, texto:string) => {
        setLoading(true);
        try{
            await postOpiniao(nome, email, texto);
        }
        catch(err){
            console.log(err);            
        }
        setLoading(false);
    }

    return {
        loading,
        enviar
    }
}
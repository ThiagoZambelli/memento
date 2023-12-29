import IPerfil from 'interface/IPerfil';
import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { getMeuPerfil } from './usuario';


export default function usePerfilService() {
    const [meuPerfil, setMeuPerfil] = useState<IPerfil>();
    const telaMobile = useMediaQuery({ query: "(max-width: 780px)" });    
    const [error, setError] = React.useState('');
    const [loading, setLoading] = React.useState(false);

    const pegaMeuPerfil = async () => {
        setLoading(true);
        try{
            const perfil = await getMeuPerfil();
            setMeuPerfil(perfil);
            setLoading(false);
        }
        catch(err){
            console.log(err);
            setLoading(false);
        }
      };

    

    return {    
        meuPerfil,    
        loading,       
        error,
        pegaMeuPerfil,
        telaMobile    
    };
}

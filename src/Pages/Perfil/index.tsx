import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useRecoilValue } from 'recoil'
import { logado } from 'state/atom'
import styles from './Perfil.module.scss';
import NavPerfil from './NavPerfil';
import IPerfil from 'interface/IPerfil';
import { getMeuPerfil } from 'Services/usuario';

function Perfil() {
    const ir = useNavigate()
    const estadoLogado = useRecoilValue(logado);
    const [meuPerfil, setMeuPerfil] = useState<IPerfil>();

    console.log(meuPerfil)

    const pegaMeuPerfil = async () => {
        setMeuPerfil(await getMeuPerfil())
    }

    useEffect(()=>{
        if(!estadoLogado){
            ir('/')
        }
        pegaMeuPerfil();
    },[])

  return (
    <section className={styles.perfil}>
        <NavPerfil meuNome={meuPerfil?.nome!} />
        Perfil
    </section>
  )
}

export default Perfil
import React from 'react'
import styles from './Banner.module.scss';
import logoClaro from 'assets/logoBardoClaro.png';
import logoEscuro from 'assets/logoBardoEscuro.png';
import NavMenu from '../NavMenu';
import styled from 'styled-components';
import useSetaEstadoModo from 'Pages/ContosDoBardo/state/hooks/useSetaEstadoModo';
import {MdWbSunny} from 'react-icons/md';
import {FaMoon} from 'react-icons/fa';

interface IBannerProps {
  modoClaro: boolean;
}
interface IBotaoModoProps {
  modoClaro: boolean;
}
const BotaoModo = styled.button<IBotaoModoProps>`
    height: 30px;
    width: 60px;
    border-radius: 15px;
    align-self: flex-end;
    border: 2px solid #black;
    background-color:${props => (!props.modoClaro ? '#7D594C':'#DACEA7')};
    display: flex;
    align-items: center;    
    box-sizing: border-box;
    transition: 1.5s;
    justify-content: ${props => (!props.modoClaro ? 'flex-start':'flex-end')}; 
    cursor: pointer;  
    padding: 5px;
    svg{
      box-sizing: border-box;
      color:${props => (props.modoClaro ? '#7D594C':'#DACEA7')};
      height: 20px;
      width: 20px;      
    }
`

function Banner({ modoClaro }: IBannerProps) {
  const setaEstado = useSetaEstadoModo();

  const aoClicar = () => {
    setaEstado(!modoClaro);
  }
  return (
    <section className={`${styles.banner} ${!modoClaro ? styles.claro : styles.escuro}`}>
      <BotaoModo modoClaro={modoClaro} onClick={() => aoClicar()}> {!modoClaro ? <FaMoon />: <MdWbSunny/>}</BotaoModo>
      <div className={styles.banner__principal}>
        <img src={modoClaro ? logoClaro : logoEscuro} alt="Logo dos Contos do Bardo" />
        <NavMenu modoClaro={modoClaro} />
      </div>
    </section>
  )
}

export default Banner
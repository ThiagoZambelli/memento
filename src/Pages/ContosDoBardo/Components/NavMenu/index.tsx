import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useRecoilValue } from 'recoil';
import { logado } from 'state/atom';
import styled from 'styled-components';

interface INavMenu {
  modoClaro: boolean;
}
interface ISectionProps {
  modoClaro: boolean
}
interface ILinkProp {  
  local: string,
  localPage: string,
  modoClaro: boolean
}

const LinkEstilizada = styled(Link)<ILinkProp>`
   padding:0;
   text-decoration: none; 
`
const Teste = styled.button<ILinkProp>`
    display: flex;
    align-items: center;
    gap: .5em;
    font-size: 1.4rem;
    border-radius: 10px;
    padding: .2em .5em;
    transition: .3s;
    background-color: ${props => (!props.modoClaro ? '#6A473C' : '#EFE4BF')};
    color: ${props => (props.modoClaro ? '#6A473C' : '#EFE4BF')};
    border: 1px solid ${props => (props.modoClaro ? '#6A473C' : '#EFE4BF')};
    cursor: pointer;
    box-shadow: 0 0 12px rgb(0, 0, 0, .4);
    ${ props => (props.local !== props.localPage ? `box-shadow: 3px 3px ${props.modoClaro ? '#6A473C' : '#EFE4BF'}, 4px 4px #000` : 'box-shadow: 1px 1px #000')};
    
      
`

const NavEstilizada = styled.nav<ISectionProps>`
    ul{
        display: flex;
        gap: 1rem;          
    }
`




function NavMenu({ modoClaro }: INavMenu) {
  const localPage = useLocation().pathname.replace("/contos-do-bardo/", "");
  const logadoValue = useRecoilValue(logado);
  
  return (

    <NavEstilizada modoClaro={modoClaro}>
      <ul>
        <li><LinkEstilizada to={'./'}><Teste local={''} localPage={localPage} modoClaro={modoClaro}>Home</Teste></LinkEstilizada></li>
        {logadoValue && <li><LinkEstilizada to={'./favoritos'}><Teste local='favoritos' localPage={localPage} modoClaro={modoClaro}>Favoritos</Teste></LinkEstilizada></li>}
      </ul>
    </NavEstilizada>
  )
}

export default NavMenu
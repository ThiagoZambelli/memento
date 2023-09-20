import React from 'react'
import { Link, useLocation } from 'react-router-dom'
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
    font-size: 1.8rem;
    border-radius: 10px;
    padding: .2em .5em;
    transition: .3s;
    background-color: ${props => (!props.modoClaro ? '#6A473C' : '#EFE4BF')};
    color: ${props => (props.modoClaro ? '#6A473C' : '#EFE4BF')};
    border: 1px solid ${props => (props.modoClaro ? '#6A473C' : '#EFE4BF')};
    cursor: pointer;
    ${ props => (props.local !== props.localPage ? `box-shadow: 3px 3px ${props.modoClaro ? '#6A473C' : '#EFE4BF'}, 4px 4px #000` : 'box-shadow: 1px 1px #000')};
    
      
`
    // font-size: 2rem;
    // text-decoration: none;
    // padding: 0 .3em;
    // color:${props => (!props.modoClaro ? '#6A473C' : '#EFE4BF')};
    // ${ props => (props.local === props.localPage ? `border-bottom: 2px solid ${!props.modoClaro ? '#6A473C' : '#EFE4BF'}` : '')};
    // ${ props => (props.local === props.localPage ? 'transform: scale(2);' : '')}

const NavEstilizada = styled.nav<ISectionProps>`
    ul{
        display: flex;
        gap: 1rem;          
    }
`




function NavMenu({ modoClaro }: INavMenu) {
  const localPage = useLocation().pathname.replace("/contos-do-bardo/", "");  
  
  return (

    <NavEstilizada modoClaro={modoClaro}>
      <ul>
        <li ><LinkEstilizada to={'./'}><Teste local={''} localPage={localPage} modoClaro={modoClaro}>Home</Teste></LinkEstilizada></li>
        <li><LinkEstilizada to={'./favoritos'}><Teste local='favoritos' localPage={localPage} modoClaro={modoClaro}>Favoritos</Teste></LinkEstilizada></li>
      </ul>
    </NavEstilizada>
  )
}

export default NavMenu
import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components';

interface INavMenu {
  modoClaro: boolean;
}
interface ISectionProps {
  modoClaro: boolean
}

const NavEstilizada = styled.nav<ISectionProps>`
    ul{
        display: flex;
        gap: 1rem;
          li{
              a{
                font-size: 2rem;
                text-decoration: none;
                color:${props => (!props.modoClaro ? '#6A473C' : '#EFE4BF')};
              }
        }
    }
`




function NavMenu({ modoClaro }: INavMenu) {

  return (

    <NavEstilizada modoClaro={modoClaro}>
      <ul>
        <li ><Link to={''}>Home</Link></li>
        <li><Link to={''}>Favoritos</Link></li>
      </ul>
    </NavEstilizada>
  )
}

export default NavMenu
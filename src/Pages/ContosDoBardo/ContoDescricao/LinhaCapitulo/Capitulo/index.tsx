import React from 'react'
import styled from 'styled-components'
import { PiBookBookmarkDuotone } from 'react-icons/pi'
import { TiChevronRight } from 'react-icons/ti'
import ScrollToTop from 'Components/ScrollToTop'

interface TextoEstilizadoProps {
    dialogo: boolean,
    modo: boolean
}
interface ContoEstilizadoProps {
    modo: boolean
}

const ContoEstilizado = styled.section<ContoEstilizadoProps>`
        position: fixed;
        top: 0;
        right: 0;
        min-width: 100vw;
        height: 100%;
        background-color: ${props => (!props.modo ? '#C2D0B5' : '#19383C')};        
        display: flex;
        align-items: flex-start;        
        flex-direction: column;
        box-sizing: border-box;
        padding: 2rem 1rem;
        overflow: auto;

        button{
            align-self: flex-end;
            padding: 0;
            border: none;
            background-color: transparent;
            color: ${props => (props.modo ? '#C2D0B5' : '#19383C')};
            font-size: 4rem;
            cursor: pointer;
           }
           h3{
            margin: 2em 0;
            align-self: center;
            line-height: 1.5em;
            font-size: 2rem;
            color:${props => (props.modo ? '#C2D0B5' : '#19383C')};
           }           
`
const TextoEstilizado = styled.p<TextoEstilizadoProps>`          
        padding: 2em 3em;
        line-height: 1.5em;
        font-size: 1.5rem;
        align-self: flex-start;
        text-align: justify;
        color:${props => (props.modo ? '#C2D0B5' : '#19383C')};
        ${props => (props.dialogo
        ? `     font-style: italic;
                text-align: center;
                font-size: 1.4rem;`
        : ``)}
        
        @media screen and (max-width: 700px) {
            padding: 1em .1em;
         }
`

interface ICapituloProps {
    onClick: () => void,
    id: string,
    tituloCap: string,
    conteudo: string[],
    modo: boolean
}
function Capitulo({ modo, onClick, conteudo, id, tituloCap }: ICapituloProps) {
    const testaDialogo = (texto: string) => {
        const ultimoCaractere = texto.length - 1;
        if (texto[0] === "–" || texto[0] === "-" || texto[0] === "'" || texto[0] === '"' || texto[ultimoCaractere] === '"') {            
            return true
        } else {            
            return false
        }
    }
    return (
        <ContoEstilizado modo={modo} >
            <ScrollToTop />
            <button onClick={onClick}><PiBookBookmarkDuotone /><TiChevronRight /></button>
            <h3>{tituloCap}</h3>
            {conteudo.map(e => (<TextoEstilizado modo={modo} dialogo={testaDialogo(e)}>{e}</TextoEstilizado>))}
            <button onClick={onClick}><PiBookBookmarkDuotone /><TiChevronRight /></button>
        </ContoEstilizado>
    )
}

export default Capitulo
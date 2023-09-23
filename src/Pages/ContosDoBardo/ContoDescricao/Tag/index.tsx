import React from 'react'
import styled from 'styled-components';

interface ITagProp {
    tag?: string
    modo: boolean
}
const TagEstilizada = styled.span<ITagProp>`
        font-family: sans-serif;
        font-size: 1.1rem;
        padding: .4em .8em;
        background-color: ${props => (!props.modo ? '#19383C' : '#C2D0B5')};
        color: ${props => (props.modo ? '#19383C' : '#C2D0B5')};
        border-radius: 10px;
`
function Tag({ modo, tag }: ITagProp) {
    return (
        <TagEstilizada modo={modo}>{tag}</TagEstilizada>
    )
}

export default Tag
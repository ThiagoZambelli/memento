import { LzBotao, LzInput } from 'lithtlez-ds'
import React, { useState } from 'react'

function ModalImagem() {
    const [url, setUrl] = useState('')
  return (
    
    <form>
        <LzInput corBg='#c6ac8fff' corSecundaria="#c6ac8fff" corPrimaria="#22333bff" label="Coloque a Url" value={url} onChange={setUrl} />
        <LzBotao corSecundaria="#eae0d5ff" corPrimaria="#5e503fff" corHover="#22333bff">Cadastrar</LzBotao>
    </form>
  )
}

export default ModalImagem
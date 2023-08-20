import React from 'react'
import styles from './ItemMenu.module.scss';
import { CgPushChevronRight } from 'react-icons/cg'

interface ItemMenuProps {
  nome: string 
  onClick: () => void
}

function ItemMenu({onClick, nome }: ItemMenuProps) { 

  
  return (
    <div onClick={onClick} className={styles.itemMenu}>{nome} <CgPushChevronRight /></div>
  )
}

export default ItemMenu
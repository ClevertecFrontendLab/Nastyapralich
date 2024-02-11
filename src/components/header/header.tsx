import React from 'react'
import style from './header.module.scss'

type HeaderProps = {
    text: string
}

export const Header: React.FC<HeaderProps> = ({text}) => {
    return <>
    <div className={style.headerContainer}>
        <div className={style.headerContainerMain}>
         <span>Главная</span>
        <div className={style.headerText}>
         <p>{text}</p>
         <span>Настройки</span>
        </div>
        </div>
        
        
    </div>
    </>
}



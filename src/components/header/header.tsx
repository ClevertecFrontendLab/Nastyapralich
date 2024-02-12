import React from 'react'
import style from './header.module.scss'
import { useMediaQuery } from 'react-responsive'
import { SettingFilled } from '@ant-design/icons'

type HeaderProps = {
    text: string
}

export const Header: React.FC<HeaderProps> = ({text}) => {
    const isMobile = useMediaQuery({ query: '(max-width: 362px)' })
    return <>
    <div className={style.headerContainer}>
        <div className={style.headerContainerMain}>
         <span>Главная</span>
        <div className={style.headerText}>
         <p>{text}</p>
         {isMobile? <span> <SettingFilled /> </span>:<span>Настройки</span>}
        </div>
        </div>
        
        
    </div>
    </>
}



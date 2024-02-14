import React from 'react'
import style from './header.module.scss'
import { useMediaQuery } from 'react-responsive'
import { SettingFilled } from '@ant-design/icons'

type HeaderProps = {
    text: string
}

export const Header: React.FC<HeaderProps> = ({text}) => {
    const isMobile = useMediaQuery({ query: '(max-width: 362px)' });
    const isTablet = useMediaQuery({ query: '(max-width: 835px)' });

    return <>
    <div className={style.headerContainer}>
        <div className={style.headerContainerMain}>
         <span>Главная</span>
        <div className={style.headerText}>
         <p>{text}</p>
         {!isMobile && !isTablet ? <span className={style.headerSettings}><SettingFilled /> Настройки</span> : ( isTablet && !isMobile ? <span className={style.headerSettings}> Настройки</span> : (<span className={style.headerSettings}> <SettingFilled /> </span>))}
        </div>
        </div>
        
        
    </div>
    </>
}



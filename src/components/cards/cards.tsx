import React, { ReactElement } from "react";
import style from './cards.module.scss';

export enum CardType {
big = "big",
small = 'small',
medium = 'medium'
}

type CardProps = {
    type: CardType
    children: ReactElement | ReactElement[]
}

export const Card: React.FC<CardProps> = ({type, children}) => {
    const cardStyle = style[type]
    return(
        <>
        <div className={cardStyle}>
           {children}
        </div>
        </>
    )
}
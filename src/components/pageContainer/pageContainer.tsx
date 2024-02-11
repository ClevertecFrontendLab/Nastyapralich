import React, { ReactElement } from "react"
import style from './pageContainer.module.scss'

type PageContainerProps = {
    children: ReactElement | ReactElement[]
}

export const PageContainer: React.FC<PageContainerProps> = ({children}) =>{
return (
    <>
    <div className={style.pageContainerMain}>
     {children}
    </div>
    </>
)
}

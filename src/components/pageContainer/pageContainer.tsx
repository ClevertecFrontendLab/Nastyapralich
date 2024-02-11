import React, { ReactElement } from "react"
import style from './pageContainer.module.scss'
import { Footer } from "@components/footer"

type PageContainerProps = {
    children: ReactElement | ReactElement[]
}

export const PageContainer: React.FC<PageContainerProps> = ({children}) =>{
return (
    <div className={style.container}>
       <div className={style.pageContainerMain}>
     {children}  
     </div> 
     <div>
        <Footer />
     </div>
    </div>
    

)
}

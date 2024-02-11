import React, { ReactElement } from 'react';
import style from './pageContainer.module.scss';

import { Header } from '@components/header/header';
import { Footer } from '@components/footer';

type PageContainerProps = {
    children: ReactElement | ReactElement[];
};

export const PageContainer: React.FC<PageContainerProps> = ({ children }) => {
    return (
            <div className={style.pageContainerMain}>
               
               <div>
                <Header
                    text={
                        'Приветствуем тебя в CleverFit — приложении, которое поможет тебе добиться своей мечты!'
                    }
                />
                </div> 
                {children}
                <div>
                  <Footer />  
                </div>
                
            </div>
    );
};

import React from 'react';
import style from './footer.module.scss';
import { AndroidFilled, AppleFilled } from '@ant-design/icons';

export const Footer: React.FC = () => {
    return (
            <div className={style.footerContainer}>
                <p>Смотреть отзывы</p>
                <div className={style.footerCard}>
                    <div className={style.footerCardText}>
                        <span className={style.text}>Скачать на телефон </span>
                        <span>Доступно в PRO-тарифе</span>
                    </div>
                    <div className={style.footerCardIcons}>
                        <div className={style.footerIconsWrap}>
                            <span>
                                <AndroidFilled />
                            </span>
                            <span>Android OS</span>
                        </div>
                        <div className={style.footerIconsWrap}>
                            <span>
                                <AppleFilled />
                            </span>
                            <span>Apple iOS</span>
                        </div>
                    </div>
                </div>
            </div>
    );
};

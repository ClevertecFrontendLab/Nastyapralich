import React, { useState } from 'react';
import style from './navbar.module.scss';
import {
    CalendarFilled,
    HeartOutlined,
    LogoutOutlined,
    ProfileFilled,
    TrophyOutlined,
} from '@ant-design/icons';

export const NavBar: React.FC = () => {
    const [isOpen, setIsOpened] = useState(true);

    const onHadleOpen = () => {
        setIsOpened(!isOpen);
    };
    return (
            <div className={isOpen ? style.container : style.closeContainer}>
                <div className={style.logo}>
                    {isOpen ? (
                        <img src='src\components\assets\logo.png' alt='logo' />
                    ) : (
                        <img src='src\components\assets\smallLogo.png' alt='logo' />
                    )}

                    <div>
                        {isOpen ? (
                            <ul>
                                <li>
                                    <HeartOutlined />
                                    <p>Тренировки</p>
                                </li>
                                <li>
                                    <CalendarFilled />
                                    <p>Календарь</p>
                                </li>
                                <li>
                                    <TrophyOutlined />
                                    <p>Достижения</p>
                                </li>
                                <li>
                                    <ProfileFilled />
                                    <p>Профиль</p>
                                </li>
                            </ul>
                        ) : (
                            <ul>
                                <li>
                                    <HeartOutlined />
                                </li>
                                <li>
                                    <CalendarFilled />
                                </li>
                                <li>
                                    <TrophyOutlined />
                                </li>
                                <li>
                                    <ProfileFilled />
                                </li>
                            </ul>
                        )}
                    </div>
                </div>
                <div>
                    {isOpen ? (
                        <div className={style.iconsWrap}>
                            <LogoutOutlined />
                            <p>Выход</p>
                        </div>
                    ) : (
                        <div>
                            <LogoutOutlined />
                        </div>
                    )}
                </div>
                <div data-test-id='sider-switch' className={style.sidemenu} onClick={onHadleOpen}>
                    <img src='src\components\assets\sidemenu-fixed-switcher.png' alt='sidemenu' />
                </div>
            </div>
    );
};

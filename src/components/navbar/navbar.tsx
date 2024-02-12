import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive'
import style from './navbar.module.scss';
import {
  CalendarFilled,
  HeartOutlined,
  LogoutOutlined,
  ProfileFilled,
  TrophyOutlined,
} from '@ant-design/icons';
import { Exit } from '@components/assets/exit/exit';

export const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);

  const isMobile = useMediaQuery({ query: '(max-width: 362px)' })

  const onHandleOpen = () => {
    setIsOpen(!isOpen);
  };

  
  return (
    <div className={isOpen ? style.container : style.closeContainer}>
      <div className={style.logo}>
        {isOpen && !isMobile ?  (
          <img src='src/components/assets/logo.png' alt='logo' />
        ) : isMobile && isOpen ? (
          <img src='src/components/assets/logoMini.png' alt='logo' />
        ): <img src='src/components/assets/smallLogo.png' alt='logo' />}
        <div>
          {isOpen ? (
            <ul>
             {isMobile ?
             ( <p>Тренировки</p>) :
              (<li>
                <HeartOutlined />
                <p>Тренировки</p>
              </li>)
              }
              {isMobile?
               (<p>Календарь</p>) :
              ( <li>
                <CalendarFilled />
                <p>Календарь</p>
              </li>)
             }
              {isMobile?
               (<p>Достижения</p>) :
              <li>
                <TrophyOutlined /> 
                <p>Достижения</p>
              </li>}
              {isMobile? ( <p>Профиль</p>)
              :
              (<li>
                <ProfileFilled />
                <p>Профиль</p>
              </li>)}
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
      {isOpen && !isMobile ? (
  <div className={style.iconsWrap}>
    <Exit />
    <p>Выход</p>
  </div>
) : !isOpen && !isMobile ? (
  <Exit />
) : isMobile && isOpen ? (
  <p>Выход</p>
) : null}
      </div>
      <div
        data-test-id={isMobile ? 'sider-switch-mobile' : "sider-switch"}
        className={style.sidemenu}
        onClick={onHandleOpen}
      >
        <img src='src/components/assets/sidemenu-fixed-switcher.png' alt='sidemenu' />
      </div>
    </div>
  );
};

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
            <ul className={style.navbarList}>
             {isMobile ?
             ( <p>Тренировки</p>) :
              (<li>
                <HeartOutlined className={style.listIcon}/>
                <p>Тренировки</p>
              </li>)
              }
              {isMobile?
               (<p>Календарь</p>) :
              ( <li>
                <CalendarFilled className={style.listIcon}/>
                <p>Календарь</p>
              </li>)
             }
              {isMobile?
               (<p>Достижения</p>) :
              <li>
                <TrophyOutlined className={style.listIcon}/> 
                <p>Достижения</p>
              </li>}
              {isMobile? ( <p>Профиль</p>)
              :
              (<li>
                <ProfileFilled className={style.listIcon}/>
                <p>Профиль</p>
              </li>)}
            </ul>
          ) : (
            <ul>
              <li>
                <HeartOutlined className={style.listIcon}/>
              </li>
              <li>
                <CalendarFilled className={style.listIcon}/>
              </li>
              <li>
                <TrophyOutlined className={style.listIcon}/>
              </li>
              <li>
                <ProfileFilled className={style.listIcon}/>
              </li>
            </ul>
          )}
        </div>
      </div>
      <div>
      {isOpen && !isMobile ? (
  <div className={style.iconsWrap}>
    <Exit />
    <p className={style.exitText}>Выход</p>
  </div>
) : !isOpen && !isMobile ? (
  <div className={style.exitWrap}>
     <Exit />
  </div>
 
) : isMobile && isOpen ? (
  <div className={style.exitText}>
    <p>Выход</p>
  </div>
  
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

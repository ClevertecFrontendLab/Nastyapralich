import React from 'react';
import style from './main-page.module.scss';

import { PageContainer } from '@components/pageContainer';
import { Card } from '@components/cards';
import { CardType } from '@components/cards/cards';
import { CalendarFilled, HeartFilled, ProfileFilled } from '@ant-design/icons';
import { NavBar } from '@components/navbar';

export const MainPage: React.FC = () => {
    return (
        <div className={style.mainPageContainer}>
            <NavBar />
            <PageContainer>
                <Card type={CardType.big}>
                    <div>
                        <p>С CleverFit ты сможешь</p>
                        <ul className={style.list}>
                            <li>
                                — планировать свои тренировки на календаре, выбирая тип и уровень
                                нагрузки; 
                            </li>
                            <li>
                                — отслеживать свои достижения в разделе статистики, сравнивая свои
                                результаты с нормами и рекордами;  
                            </li>
                            <li>
                                — создавать свой профиль, где ты можешь загружать свои фото, видео
                                и отзывы о тренировках;
                            </li>
                            <li>
                                — выполнять расписанные тренировки для разных частей тела, следуя
                                подробным инструкциям и советам профессиональных тренеров.
                            </li>
                        </ul>
                    </div>
                </Card>
                <Card type={CardType.medium}>
                    <p>
                        CleverFit — это не просто приложение, а твой личный помощник в мире фитнеса.
                        Не откладывай на завтра — начни тренироваться уже сегодня!
                    </p>
                </Card>
                <div className={style.smallCardsConatiner}>
                    <Card type={CardType.small}>
                        <div>
                            <p>Расписать тренировки</p>
                        </div>
                        <div className={style.smallIcons}>
                            <div>
                                <HeartFilled />
                            </div>
                            <p className={style.iconText}>Тренировки</p>
                        </div>
                    </Card>
                    <Card type={CardType.small}>
                        <div>
                            <p>Назначить календарь</p>
                        </div>
                        <div className={style.smallIcons}>
                            <div>
                                <CalendarFilled />
                            </div>
                            <p className={style.iconText}>Календарь</p>
                        </div>
                    </Card>
                    <Card type={CardType.small}>
                        <div>
                            <p>Заполнить профиль</p>
                        </div>
                        <div className={style.smallIcons}>
                            <div>
                                <ProfileFilled />
                            </div>
                            <p className={style.iconText}>Профиль</p>
                        </div>
                    </Card>
                </div>
            </PageContainer>
        </div>
    );
};

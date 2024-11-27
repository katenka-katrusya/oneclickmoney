import s from './styles.module.scss';
import { useEffect, useRef, useState } from 'react';
import { updateSliderBackground } from '@/helpers/updateSliderBackgroun.js';
import { Button } from '@/components/ui/button/Button.jsx';

export const Hero = () => {
  const sliderMoneyRef = useRef(null);
  const sliderDaysRef = useRef(null);
  
  const [money, setMoney] = useState(30000); // сумма
  const [days, setDays] = useState(30); // количество дней
  
  // const daysList = [15, 30, 45, 60, 75, 90, 105, 120];
  
  useEffect(() => {
    updateSliderBackground(sliderMoneyRef, money, 500, 100000);
    updateSliderBackground(sliderDaysRef, days, 15, 120);
  }, [money, days]);
  
  return (
    <section className={s.hero}>
      <div className={`container ${s.hero__container}`}>
        <img className={s.img} src='../img/logo.svg' alt='Логотип компании Oneclickmoney' />
        
        <h1 className='visually-hidden'>
          Онлайн займы на карту, оформление микрозаймов и экспресс-кредитов от Oneclickmoney
        </h1>
        
        <div className={s.wrapper}>
          <div className={s.block}>
            <h2 className={s.title}>Сумма займа</h2>
            <div className={s.bar}>
              <input
                ref={sliderMoneyRef}
                type='range'
                className={s.slider}
                data-bar='money'
                min="500"
                max="100000"
                step="500"
                value={money}
                onChange={(e) => setMoney(e.target.value)}
              />
            </div>
            
            <div className={s.limit}>
              <span>500</span>
              <span>100000</span>
            </div>
          </div>
          
          <div className={s.block}>
            <h2 className={s.title}>Срок</h2>
            <div className={s.bar}>
              <input
                ref={sliderDaysRef}
                type='range'
                className={s.slider}
                data-bar='days'
                min="15"
                max="120"
                step="15"
                value={days}
                onChange={(e) => setDays(e.target.value)}
              />
            </div>
            
            <div className={s.limit}>
              <span>15</span>
              <span>120</span>
            </div>
          </div>
          
          <div className={s.result}>
            <h3 className={s.result__title}>Вы берёте:</h3>
            
            <div className={s.result__inputs}>
              <label className={s.label_money}>
                <input
                  className={s.result__money}
                  type='number'
                  value={money}
                  readOnly
                />
                ₽
              </label>
              <label className={s.label_days}>
                на
                <input
                  className={s.result__days}
                  type='number'
                  value={days}
                  readOnly
                />
                дней
              </label>
            </div>
            
            <Button>Получить деньги</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

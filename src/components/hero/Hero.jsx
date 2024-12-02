import s from './styles.module.scss';
import { useEffect, useRef, useState } from 'react';
import { updateSliderBackground } from '@/helpers/updateSliderBackgroun.js';
import LinkFormat from '@/components/ui/linkFormat/LinkFormat.jsx';

export const Hero = () => {
  const sliderMoneyRef = useRef(null);
  const sliderDaysRef = useRef(null);
  
  // для ползунков
  const [money, setMoney] = useState(30000); // сумма
  const [days, setDays] = useState(30); // количество дней
  
  // для инпутов
  const [moneyInput, setMoneyInput] = useState(30000);
  const [daysInput, setDaysInput] = useState(30);
  
  const roundValue = (value, step, min, max) => {
    let rounded = Math.round(value / step) * step;
    return Math.max(min, Math.min(max, rounded));
  };
  
  const handleInputChange = (type) => (e) => {
    const value = e.target.value;
    
    if (value === '') {
      if (type === 'money') setMoneyInput('');
      if (type === 'days') setDaysInput('');
    } else {
      if (type === 'money') setMoneyInput(value);
      if (type === 'days') setDaysInput(value);
    }
  };
  
  const handleInputBlur = (type, step, min, max) => () => {
    const value = type === 'money' ? moneyInput : daysInput;
    
    if (value === '') {
      // если поле пусто, то минимальное значение
      if (type === 'money') {
        setMoney(500);
        setMoneyInput(500);
      }
      if (type === 'days') {
        setDays(15);
        setDaysInput(15);
      }
    } else {
      // округление значения и обновление состояния
      const roundedValue = roundValue(value, step, min, max);
      if (type === 'money') {
        setMoney(roundedValue);
        setMoneyInput(roundedValue);
      }
      if (type === 'days') {
        setDays(roundedValue);
        setDaysInput(roundedValue);
      }
    }
  };
  
  useEffect(() => {
    setMoneyInput(money);
    setDaysInput(days);
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
                  value={moneyInput}
                  onChange={handleInputChange('money')}
                  onBlur={handleInputBlur('money', 500, 500, 100000)}
                />
                ₽
              </label>
              <label className={s.label_days}>
                на
                <input
                  className={s.result__days}
                  type='number'
                  value={daysInput}
                  onChange={handleInputChange('days')}
                  onBlur={handleInputBlur('days', 15, 15, 120)}
                />
                дней
              </label>
            </div>
            
            <LinkFormat>Получить деньги</LinkFormat>
          </div>
        </div>
      </div>
    </section>
  );
};

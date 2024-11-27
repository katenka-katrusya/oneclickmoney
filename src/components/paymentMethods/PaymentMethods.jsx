import s from './styles.module.scss';
import visa from '@/assets/img/visa.svg';
import mc from '@/assets/img/mc.svg';
import mir from '@/assets/img/mir.svg';
import maestro from '@/assets/img/maestro.svg';
import { Slider } from '@/components/slider/Slider.jsx';

export const PaymentMethods = () => {
  const payments = [
    { id: 1, title: 'Visa', icon: visa },
    { id: 2, title: 'MasterCard', icon: mc },
    { id: 3, title: 'Maestro', icon: maestro },
    { id: 4, title: 'Mir', icon: mir }
  ];
  
  return (
    <section className={s.payment}>
      <div className='container'>
        <h2 className={s.title}>Вы&nbsp;можете получить денежные средства любым удобным для&nbsp;вас способом:</h2>
        
        <Slider payments={payments} />
      </div>
    </section>
  );
};

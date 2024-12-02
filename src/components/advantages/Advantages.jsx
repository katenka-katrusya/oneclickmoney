import s from './styles.module.scss';
import { Title } from '@/components/ui/title/Title.jsx';
import { advantagesData } from '@/data/advantagesData.js';
import LinkFormat from '@/components/ui/linkFormat/LinkFormat.jsx';

export const Advantages = () => {
  return (
    <section className={s.advantages}>
      <div className={`container ${s.advantages__container}`}>
        <Title className={s.title}>Преимущества онлайн займов <span>OneClickMoney.ru</span></Title>
        
        <ul className={s.list}>
          {advantagesData.map((item) => (
            <li key={item.id} className={`${s.item} ${s[`item${item.id}`]}`}>
              <img src={item.img} alt={item.title} />
              <p>{item.title}</p>
            </li>
          ))}
        </ul>
        
        <LinkFormat className={s.btn}>Получить займ</LinkFormat>
      </div>
    </section>
  );
};

import s1 from './AccordionItem1.module.scss';
import s2 from './AccordionItem2.module.scss';
import { MarkdownContent } from '@/components/markdown/MarkdownContent.jsx';

export const AccordionItem = ({ id, onClick, isOpenId, item, typeStyles }) => {
  const s = typeStyles === 'styles1' ? s1 : s2;
  
  return (
    <li key={id} className={s.accordion__item}>
      <button
        className={s.accordion__item_header}
        onClick={() => onClick(id)}
      >
        <span className={`${s.desc} ${isOpenId === id ? s.active : ''}`}>{item.question}</span>
        
        <svg className={`${s.svg_arrow} ${isOpenId === id ? s.svg_open : ''}`} width='16' height='16'
             viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M0.327991 4.58731L7.47679 12.1233C7.47679 12.1233 7.79039 12.4417 7.99999 12.4417C8.22719 12.4417 8.52319 12.1233 8.52319 12.1233L15.672 4.58731C15.896 4.35211 15.896 3.96971 15.672 3.73451C15.4496 3.49931 15.0864 3.49931 14.8624 3.73451L7.99999 10.9681L1.13599 3.73451C0.911991 3.49931 0.550391 3.49931 0.326391 3.73451C0.103991 3.96971 0.103991 4.35211 0.327991 4.58731Z'
            fill='black'
          />
        </svg>
      </button>
      <div className={`${s.accordion__item_collapse} ${isOpenId === id ? s.open : ''}`}>
        <MarkdownContent className={`${s.hidden}`} typeStyles={typeStyles}>
          {item.answer}
        </MarkdownContent>
        
        {typeStyles === 'styles2' && isOpenId === id &&
          (
            <button className={`${s.btn} ${isOpenId === id ? s.btn_open : ''}`}>
              Оформить займ
            </button>
          )
        }
      </div>
    </li>
  );
};
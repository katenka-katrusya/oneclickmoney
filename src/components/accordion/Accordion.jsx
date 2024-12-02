import s from './styles.module.scss';
import { useState } from 'react';
import { AccordionItem } from '@/components/accordion/accordionItem/AccordionItem.jsx';

export const Accordion = ({ items, typeStyles }) => {
  const [isOpenId, setIsOpenId] = useState(null);
  
  const clickHandler = (id) => {
    if (isOpenId === id) {
      setIsOpenId(null);
    } else {
      setIsOpenId(id);
    }
  };
  
  return (
    <ul className={`${typeStyles === 'styles1' ? '' : s.accordion}`}>
      {items.map((item, id) => (
        <AccordionItem
          key={id}
          onClick={clickHandler}
          item={item}
          id={id}
          isOpenId={isOpenId}
          typeStyles={typeStyles}
        />
      ))}
    </ul>
  );
};

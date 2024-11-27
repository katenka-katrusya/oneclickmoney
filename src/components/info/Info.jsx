import s from './styles.module.scss';
import { Title } from '@/components/ui/title/Title.jsx';
import { MarkdownContent } from '@/components/markdown/MarkdownContent.jsx';
import { info } from '@/data/info.json';
import { useState } from 'react';

export const Info = () => {
  const [isOpen, setIsOpen] = useState(true);
  
  const toggleInfo = () => {
    setIsOpen(prev => !prev);
  }
  
  return (
    <section className={s.info}>
      <div className={`container ${s.info__container}`}>
        <div className={`${s.wrapper} ${!isOpen ? s.noMargin : ''}`} onClick={toggleInfo}>
          <Title className={s.title}>Информация</Title>
          <svg className={`${!isOpen ? s.open : ''}`} width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd"
                  d="M17.642 2.74513L9.8642 11.1148C9.38692 11.6284 8.61308 11.6284 8.1358 11.1148L0.357965 2.74513C-0.119322 2.23152 -0.119322 1.39881 0.357965 0.885203C0.835251 0.371598 1.60909 0.371598 2.08637 0.885203L9 8.32491L15.9136 0.885203C16.3909 0.371599 17.1647 0.371599 17.642 0.885203C18.1193 1.39881 18.1193 2.23153 17.642 2.74513Z"
                  fill="#333333"
            />
          </svg>
        </div>
        
        <div className={`${s.content} ${isOpen ? s.show : ''}`}>
          <MarkdownContent className={`${s.hidden} ${s.description}`}>{info}</MarkdownContent>
        </div>
      </div>
    </section>
  );
};

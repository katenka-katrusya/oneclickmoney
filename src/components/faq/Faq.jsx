import s from './styles.module.scss';
import { Title } from '@/components/ui/title/Title.jsx';
import { Accordion } from '@/components/accordion/Accordion.jsx';
import { faqItems, faqItems2 } from '@/data/faqItems.json';

export const Faq = () => {
  return (
    <section className={s.faq}>
      <div className={`container ${s.faq__container}`}>
        <Title className={s.title}>Общие вопросы</Title>
        
        <div className={s.accordions}>
          <Accordion items={faqItems} typeStyles='styles1' />
          <Accordion items={faqItems2} typeStyles='styles2' />
        </div>
      </div>
    </section>
  );
};

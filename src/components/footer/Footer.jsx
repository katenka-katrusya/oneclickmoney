import s from './styles.module.scss';
import { MarkdownContent } from '@/components/markdown/MarkdownContent.jsx';
import { info } from '@/data/footerInfo.json';

export const Footer = () => {
  return (
    <section className={s.footer}>
      <div className={`container ${s.footer__container}`}>
        <MarkdownContent className={s.info}>{info}</MarkdownContent>
        <span>&copy;&nbsp;2011-2024&nbsp;АО &laquo;МКК&nbsp;УФ&raquo;</span>
      </div>
    </section>
  );
};

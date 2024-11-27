import s from './styles.module.scss';
import Markdown from 'react-markdown';

export const MarkdownContent = ({ children, className, typeStyles }) => {
  const markdownClassName = typeStyles === 'styles1' ? s.markdown : `${s.markdown} ${s.markdown_custom}`;
  
  return (
    <div className={`${markdownClassName} ${className}`}>
      <Markdown>{children}</Markdown>
    </div>
  );
};

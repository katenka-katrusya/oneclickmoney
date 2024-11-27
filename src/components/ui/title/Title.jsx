import s from './styles.module.scss';

export const Title = ({ children, className }) => {
  return (
    <h2 className={`${s.title} ${className}`}>{children}</h2>
  );
};

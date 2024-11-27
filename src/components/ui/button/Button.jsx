import s from './styles.module.scss';

export const Button = ({ children, className }) => {
  return (
    <button className={`${className} ${s.btn}`}>{children}</button>
  );
};

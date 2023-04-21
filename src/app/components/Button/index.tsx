import style from './Button.module.css';

export default function Button({
  children,
  theme,
}: {
  children: string;
  theme?: 'black' | 'white';
}) {
  theme = theme || 'black';
  const themeStyle = theme === 'black' ? style.black : '';
  return (
    <button className={`${style.button} ${themeStyle}`}>{children}</button>
  );
}

'use client';

import Link from 'next/link';
import style from './Button.module.css';

export default function Button({
  children,
  isActive,
  type,
  handleClick,
  href,
  theme,
}: {
  children: string;
  isActive?: boolean;
  type?: 'link' | 'button';
  handleClick?: () => void;
  href?: string;
  theme?: 'black' | 'white';
}) {
  theme = theme || 'black';
  const themeStyle = theme === 'black' ? style.black : '';

  return (
    <>
      {type !== 'link' && (
        <button
          className={`${style.button} ${themeStyle}`}
          disabled={!isActive}
          onClick={() => {
            if (handleClick) handleClick();
          }}
        >
          {children}
        </button>
      )}
      {type === 'link' && (
        <div className={`${style.button} ${themeStyle}`}>
          <Link href={href + ''}>{children}</Link>
        </div>
      )}
    </>
  );
}

'use client';

import Link from 'next/link';
import style from './Button.module.css';

export default function Button({
  children,
  isActive,
  type,
  handleClick,
  href,
}: {
  children: string;
  isActive?: boolean;
  type?: 'link' | 'button' | 'submit';
  handleClick?: () => void;
  href?: string;
}) {
  const themeStyle = style.black;

  return (
    <>
      {type !== 'link' && (
        <button
          className={`${style.button} ${themeStyle}`}
          type={type}
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

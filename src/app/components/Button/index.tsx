'use client';

import Link from 'next/link';
import style from './Button.module.css';
import { formId } from '@/app/constants';

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
          form={formId}
          className={`${style.button} ${themeStyle}`}
          type={type}
          disabled={!isActive}
          onClick={(e) => {
            e.preventDefault();
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

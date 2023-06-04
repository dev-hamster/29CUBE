'use client';

import Image from 'next/image';
import Link from 'next/link';
import style from './Button.module.css';
import { formId } from '@/app/constants';

interface ButtonProps {
  children?: string;
  isActive?: boolean;
  type?: 'link' | 'button' | 'submit';
  handleClick?: () => void;
  href?: string;
}

function Button({ children, isActive, type, handleClick, href }: ButtonProps) {
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
        <Link href={href + ''}>
          <div className={`${style.button} ${themeStyle}`}>{children}</div>
        </Link>
      )}
    </>
  );
}

function NextButton({ isActive, type, handleClick, href }: ButtonProps) {
  const themeStyle = style.black;

  return (
    <>
      {type !== 'link' && (
        <button
          form={formId}
          className={`${style.arrow} ${themeStyle}`}
          type={type}
          disabled={!isActive}
          onClick={(e) => {
            e.preventDefault();
            if (handleClick) handleClick();
          }}
        >
          <Image src='/images/arrow.svg' width={20} height={36} alt='' />
        </button>
      )}
      {type === 'link' && (
        <Link href={href + ''}>
          <div className={`${style.arrow} ${themeStyle}`}>
            <Image src='/images/arrow.svg' width={20} height={36} alt='' />
          </div>
        </Link>
      )}
    </>
  );
}

export default Button;
export { NextButton };

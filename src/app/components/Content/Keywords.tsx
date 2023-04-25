'use client';
import Form from '@/app/components/Form';
import Quiz from '@/app/components/Quiz';
import style from './Keywords.module.scss';
import { useState } from 'react';

export default function Keywords() {
  const MAX_ITEM = 3;
  const [items, setItems] = useState<string[]>([]);
  // TODO 키워드 최대 선택

  return (
    <div>
      <Quiz>
        응삼이님은 <br />
        어떤 사람이에요?
      </Quiz>
      <Form>
        <label htmlFor=''>3가지 키워드를 선택해 주세요!</label>
        <div className={style.container}>
          <div className={style.group}>
            <input type='checkbox' name='keywords' id='tmp' />
            <label htmlFor='tmp'>냐냐냐</label>
            <input type='checkbox' name='keywords' id='tmp2' />
            <label htmlFor='tmp2' className={style.center}>
              먀먀먀
            </label>
            <input type='checkbox' name='keywords' id='tmp3' />
            <label htmlFor='tmp3'>라라라</label>
          </div>
          <div className={style.group}>
            <input type='checkbox' name='keywords' id='tmp' />
            <label htmlFor='tmp'>냐냐냐</label>
            <input type='checkbox' name='keywords' id='tmp2' />
            <label htmlFor='tmp2' className={style.center}>
              먀먀먀
            </label>
            <input type='checkbox' name='keywords' id='tmp3' />
            <label htmlFor='tmp3'>라라라</label>
          </div>
          <div className={style.group}>
            <input type='checkbox' name='keywords' id='tmp' />
            <label htmlFor='tmp'>냐냐냐</label>
            <input type='checkbox' name='keywords' id='tmp2' />
            <label htmlFor='tmp2' className={style.center}>
              먀먀먀
            </label>
            <input type='checkbox' name='keywords' id='tmp3' />
            <label htmlFor='tmp3'>라라라</label>
          </div>
          <div className={style.group}>
            <input type='checkbox' name='keywords' id='tmp' />
            <label htmlFor='tmp'>냐냐냐</label>
            <input type='checkbox' name='keywords' id='tmp2' />
            <label htmlFor='tmp2' className={style.center}>
              먀먀먀
            </label>
            <input type='checkbox' name='keywords' id='tmp3' />
            <label htmlFor='tmp3'>라라라</label>
          </div>
          <div className={style.group}>
            <input type='checkbox' name='keywords' id='tmp' />
            <label htmlFor='tmp'>냐냐냐</label>
            <input type='checkbox' name='keywords' id='tmp2' />
            <label htmlFor='tmp2' className={style.center}>
              먀먀먀
            </label>
            <input type='checkbox' name='keywords' id='tmp3' />
            <label htmlFor='tmp3'>라라라</label>
          </div>
          <div className={style.group}>
            <input type='checkbox' name='keywords' id='tmp' />
            <label htmlFor='tmp'>냐냐냐</label>
            <input type='checkbox' name='keywords' id='tmp2' />
            <label htmlFor='tmp2' className={style.center}>
              먀먀먀
            </label>
            <input type='checkbox' name='keywords' id='tmp3' />
            <label htmlFor='tmp3'>라라라</label>
          </div>
        </div>
      </Form>
    </div>
  );
}

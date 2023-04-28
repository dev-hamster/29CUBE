import Quiz from '@/app/components/Quiz';
import Form from '@/app/components/Form';

export default function Gender() {
  const name = '응삼이';

  return (
    <div>
      <Quiz>
        {name}님의 <br /> 성별을 알려주세요.
      </Quiz>
      <Form>
        <div className='gender-container'>
          <input type='radio' id='male' name='gender' value='male' />
          <label htmlFor='male'>남성</label>
          <input type='radio' id='female' name='gender' value='female' />
          <label htmlFor='female'>여성</label>
          <input type='radio' id='unknown' name='gender' value='unknown' />
          <label htmlFor='unknown'>선택 안함</label>
        </div>
      </Form>
    </div>
  );
}

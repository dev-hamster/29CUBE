import Quiz from '@/app/components/Quiz';
import Form from '@/app/components/Form';

export default function Age() {
  const name = '응삼이';

  return (
    <div>
      <Quiz>
        {name}님은 <br /> 몇 세인가요?
      </Quiz>
      <Form>
        <label htmlFor='age'>만 나이를 선택해 주세요!</label>
        <input id='age' type='text' pattern='[0-9]*' />
        {/* <select name='age' id='age'>
          <option value=''>--Please choose an option--</option>
          <option value='1'>0</option>
          <option value='2'>1</option>
        </select> */}
      </Form>
    </div>
  );
}

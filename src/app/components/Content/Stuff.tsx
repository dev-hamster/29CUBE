import Form from '@/app/components/Form';
import Quiz from '@/app/components/Quiz';
import style from './Place.module.scss';

export default function Stuff() {
  return (
    <div>
      <Quiz>
        응삼이님을 대표할 수 있는 물건, <br />
        어떤 게 있을까요?
      </Quiz>
      <Form>
        <label htmlFor=''>연상되는 물건을 골라주세요.</label>
        <div className={style.container}>
          <input type='radio' id='masdfale' name='gender' value='male' />
          <label htmlFor='masdfale'>가파른 산도 거뜬한 등산화</label>
          <input type='radio' id='feasdfmale' name='gender' value='female' />
          <label htmlFor='feasdfmale'>가파른 산도 거뜬한 등산화</label>
          <input type='radio' id='asdfasdf' name='gender' value='unknown' />
          <label htmlFor='asdfasdf'>가파른 산도 거뜬한 등산화</label>
        </div>
      </Form>
    </div>
  );
}

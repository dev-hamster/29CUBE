import Form from '@/app/components/Form';
import Quiz from '@/app/components/Quiz';
import style from './Place.module.scss';

export default function Place() {
  return (
    <div>
      <Quiz>
        응삼이님과 즐거운 시간을 <br />
        보낼 수 있는 곳은 어딜까요?
      </Quiz>
      <Form>
        <label htmlFor=''>함께하고 싶은 장소를 선택해 주세요.</label>
        <div className={style.container}>
          <input type='radio' id='masdfale' name='gender' value='male' />
          <label htmlFor='masdfale'>
            탁 트인 자연의 풍경을 즐길 수 있는 캠핑장
          </label>
          <input type='radio' id='feasdfmale' name='gender' value='female' />
          <label htmlFor='feasdfmale'>
            탁 트인 자연의 풍경을 즐길 수 있는 캠핑장
          </label>
          <input type='radio' id='asdfasdf' name='gender' value='unknown' />
          <label htmlFor='asdfasdf'>
            탁 트인 자연의 풍경을 즐길 수 있는 캠핑장
          </label>
        </div>
      </Form>
    </div>
  );
}

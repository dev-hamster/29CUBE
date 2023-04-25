import Quiz from '@/app/components/Quiz';
import Form from '@/app/components/Form';

export default function Start() {
  return (
    <div>
      <Quiz>
        그럼 시작해볼게요. <br /> 상대방을 뭐라고 부르며 좋을까요?
      </Quiz>
      <Form>
        <label htmlFor='name'>뭐든 좋아요. 애칭이 좋겠네요!</label>
        <input autoFocus id='name' type='text' maxLength={10} />
      </Form>
    </div>
  );
}

import { CSSProperties } from 'react';
import style from './Shadow.module.css';

function Shadow({ styles }: { styles?: CSSProperties }) {
  return <div className={style.grad} style={styles}></div>;
}

export default Shadow;

import style from './title.module.css';
import Image from 'next/image';

const Title = ({ title }) => {
    return (
        <div className={style.title}>
            <div>
              <Image src='/svg/box.svg' width='150px' height='200px'/>
            </div>
            <h3>{title}</h3>
        </div>
    );
}
export default Title;
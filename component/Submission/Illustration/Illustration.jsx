import Image from 'next/image';
import style from './illustration.module.css';

const Illustration = () => {
    return (
        <div className={style.illustration}>
            <Image src='/svg/illustration.svg' width={600} height={400}/>
        </div>
    );
}
export default Illustration;
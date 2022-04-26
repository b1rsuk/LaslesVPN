import style from './user.module.css';
import Image from 'next/image';

const User = () => {
    return (
        <div className={style.user}>
            <Image src='/svg/robert.svg' width='70px' height='70px'/>
        </div>
    );
}
export default User;
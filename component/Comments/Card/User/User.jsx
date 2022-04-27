import style from './user.module.css';
import Image from 'next/image';

const User = ({ name, country, grade, src }) => {
    return (
        <div className={style.container}>
            <div className={style.user}>
                <Image src={src} width='60px' height='60px'/>
                <div className={style.human}>
                    <h3>{name}</h3>
                    <h5 className="miniText">{country}</h5>
                </div>
            </div>
            <div className={style.grade}>
                <h4>{grade}</h4>
                <Image src='/svg/star.svg' width='15px' height='15px'/>
            </div>
        </div>  
    );
}
export default User;
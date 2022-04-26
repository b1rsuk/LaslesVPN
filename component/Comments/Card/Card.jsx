import style from './card.module.css';
import User from './User/User';

const Card = () => {
    return (
        <div className={style.card}>
            <User />
        </div>
    );
}
export default Card;
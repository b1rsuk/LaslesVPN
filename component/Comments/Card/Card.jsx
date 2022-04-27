import style from './card.module.css';
import User from './User/User';
import Comment from './Comment/Comment';

const Card = ({ card }) => {
    return (
        <div className={style.container}>
            {
                card.map((card, index) => (
                    <div className={style.card} key={index}>
                        <User name={card.name} country={card.country} grade={card.grade} src={card.src}/>
                        <Comment comment={card.comment}/>
                    </div>
                ))
            }
        </div>
    );
}
export default Card;
import style from './comments.module.css';
import Text from './Text/Text';
import Card from './Card/Card';

const Comments = () => {
    return (
        <div className={style.comments}>
            <Text />
            <Card />
        </div>
    );
}
export default Comments;
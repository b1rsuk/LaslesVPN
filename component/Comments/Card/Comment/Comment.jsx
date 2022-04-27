import style from './comment.module.css';

const Comment = ({ comment }) => {
    return (
        <div className={style.comment}>
            <h3>{comment}</h3>
        </div>
    );
}
export default Comment;
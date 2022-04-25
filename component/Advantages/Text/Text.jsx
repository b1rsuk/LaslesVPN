import style from './text.module.css';
import Menu from './Menu/Menu';

const Text = () => {
    return (
        <div className={style.text}>
            <h3>We Provide Many <br/>Features You Can Use</h3>
            <h5 className="miniText">You can explore the features that we provide with fun <br/>and have their own functions each feature.</h5>
            <Menu />
        </div>
    );
}
export default Text;
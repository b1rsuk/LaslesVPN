import style from './text.module.css';

const Text = () => {
    return (
        <div className={style.text}>
            <h3>Subscribe Now for<br/>Get Special Features!</h3>
            <h5 className="miniText">Let's subscribe with us and find the fun.</h5>
        </div>
    );
}
export default Text;
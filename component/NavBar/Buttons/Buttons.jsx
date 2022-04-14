import style from './buttons.module.css';

const Buttons = () => {
    return (
        <div className={style.buttons}>
            <button className={style.signIn}>Sign In</button>
            <button className={style.signUp}>Sign Up</button>
        </div>
    );
}
export default Buttons;
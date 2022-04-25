import style from './buttons.module.css';
import Button from '../../Buttons/Buttons';

const Buttons = () => {
    return (
        <div className={style.buttons}>
            <button className={style.signIn}>Sign In</button>
            <div className={style.signUp}>
              <Button type='outline' radius='23px'>Sign Up</Button>
            </div>
        </div>
    );
}
export default Buttons;

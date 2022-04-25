import style from './text.module.css';
import ButtonPrimary from '../../Buttons/Buttons';

const Text = () => {
    return (
        <div className={style.text}>
            <h2>Want anything to be easy with <span className={style.vpn}>LaslesVPN.</span></h2>
            <h5 className={"miniText" + " " + style.title}>Provide a network for all your needs with ease and fun using <span className={style.vpn}>LaslesVPN</span> <br/>discover interesting features from us.</h5>
            <div className={style.button}>
             <ButtonPrimary type='primary' radius='5px' color='white' fontWeight={500}>Get Started</ButtonPrimary>
            </div>
        </div>
    );
}
export default Text;
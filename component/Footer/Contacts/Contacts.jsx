import Logo from '../../Logo/Logo';
import SocialNetWord from './SocialNetWork/SocialNetWord';
import style from './contacts.module.css';

const Contacts = () => {
    return (
        <div className={style.contacts}>
            <Logo />
            <h5 className="miniText">LaslesVPN is a private virtual network<br/>that has unique features and has high security.</h5>
            <SocialNetWord />
        </div>
    )
}
export default Contacts;
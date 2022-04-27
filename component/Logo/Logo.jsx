import Image from "next/image";
import style from './logo.module.css';

const Logo = () => {
    return (
        <div className={style.logo}>
            <Image src='/logo.svg' alt="LaslesVPN" width="38px" height="38px"/>
            <h1>Lasles<span>VPN</span></h1>
        </div>
    );
}
export default Logo;
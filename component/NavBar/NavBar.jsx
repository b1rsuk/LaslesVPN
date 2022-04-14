import style from './navbar.module.css';
import Logo from './Logo/Logo';
import Menu from './Menu/Menu';
import Buttons from './Buttons/Buttons';

const NavBar = () => {
    return (
        <div className={style.navbar}>
            <div className={style.container}>
                <Logo />
                <Menu />
                <Buttons />
            </div>
        </div>
    );
}
export default NavBar;
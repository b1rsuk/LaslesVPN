import style from './navbar.module.css';
import Logo from '../Logo/Logo';
import Menu from './Menu/Menu';
import Buttons from './Buttons/Buttons';
import Burger from './Burger/Burger';
import { Fragment } from 'react';

const NavBar = () => {
    return (
        <Fragment>
            <Burger />
            <div className={style.navbar}>
                <div className={style.container}>
                    <Logo />
                    <Menu />
                    <Buttons />
                </div>
            </div>
        </Fragment>
    );
}
export default NavBar;
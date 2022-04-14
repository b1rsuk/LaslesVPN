import style from './menu.module.css';

const Menu = () => {
    return (
        <ul className={style.menu}>
            <li>About</li>
            <li>Features</li>
            <li>Pricing</li>
            <li>Testimonials</li>
            <li>Help</li>
        </ul>
    );
}
export default Menu;
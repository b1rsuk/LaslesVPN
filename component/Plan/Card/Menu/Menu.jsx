import style from './menu.module.css';
import Image from 'next/image';

const Menu = ({ menu }) => {
    return (
        <ul className={style.menu}>
            {
                menu.map((menu, index) => (
                    <div className={style.container} key={index}>
                        <Image src='/svg/ok_2.svg' width='20px' height='20px'/>
                        <li>{menu}</li>
                    </div>
                ))
            }
        </ul>
    );
}
export default Menu;
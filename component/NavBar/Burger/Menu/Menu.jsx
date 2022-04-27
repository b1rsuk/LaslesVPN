import style from './menu.module.css';
import Image from 'next/image';

const Menu = ({ visible, setVisible }) => {
    return (
        <div className={style.menu} style={{display: visible? 'block' : 'none'}}>
            <div className={style.close} onClick={() => setVisible(false)}>
              <Image src='/svg/close.svg' width='25px' height='25px'/>
            </div>
            <ul>
                <li>About</li>
                <li>Features</li>
                <li>Pricing</li>
                <li>Testimonials</li>
                <li>Help</li>
            </ul>
        </div>
    );
}
export default Menu;
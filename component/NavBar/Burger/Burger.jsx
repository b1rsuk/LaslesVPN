import style from './burger.module.css';
import Button from './Button/Button';
import Menu from './Menu/Menu';
import { Fragment, useState } from 'react';

const Burger = () => {
    const [visible, setVisible] = useState(false);
    return (
        <Fragment>
           <Menu visible={visible} setVisible={setVisible}/>
           <Button visible={visible} setVisible={setVisible}/>
        </Fragment>
    );
}
export default Burger;
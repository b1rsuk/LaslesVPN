import style from './buttons.module.css';
import Button from '../../../Buttons/Buttons';
import Arrow from '../Arrow/Arrow';

const Buttons = ({ setArrow, arrow }) => {
    return (
        <div className={style.buttons}>
            <div className={style.button}>
                <Button type='outline' radius='50%' onClick={() => setArrow(arrow - 1)}>
                    <Arrow type='left'/>
                </Button>
            </div>
            <div className={style.button}>
                <Button type='outline' radius='50%' onClick={() => setArrow(arrow + 1)}>
                    <Arrow type='right'/>
                </Button>
            </div>
        </div>
    );
}
export default Buttons;
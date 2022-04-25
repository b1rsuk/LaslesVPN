import style from './buy.module.css';
import Button from '../../../Buttons/Buttons';

const Buy = ({ price }) => {
    return (
        <div className={style.buy}>
            <h3>{price}</h3>
            <div className={style.button}>
                <Button type='outline' fontWeight={600} fontSize='15px' radius='23px'>Select</Button>
            </div>
        </div>
    );
}
export default Buy;
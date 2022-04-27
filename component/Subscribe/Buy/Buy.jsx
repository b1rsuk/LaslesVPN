import style from './buy.module.css';
import Button from '../../Buttons/Buttons';

const Buy = () => {
    return (
        <div className={style.buy}>
            <Button type='primary' radius='5px' fontWeight={500} fontSize='20px' color='white'>Subscribe Now</Button>
        </div>
    );
}
export default Buy;
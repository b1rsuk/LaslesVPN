import style from './advantages.module.css';
import Human from './Human/Human';
import Text from './Text/Text';

const Advantages = () => {
    return (
        <div className={style.advantages}>
            <div className={style.container}>
                <Human/>
                <Text />
            </div>
        </div>
    );
}
export default Advantages;
import style from './subscribe.module.css';
import Text from './Text/Text';
import Buy from './Buy/Buy';

const Subscribe = () => {
    return (
        <div className={style.subscribe}>
            <Text />
            <Buy />
        </div>
    );
}
export default Subscribe;
import style from './card.module.css';
import Title from './Title/Title';
import Menu from './Menu/Menu';
import Buy from './Buy/Buy';

const Card = ({ title, menu, price }) => {
    return (
        <div className={style.card}>
            <div>
                <Title title={title}/>
                <Menu menu={menu}/>
            </div>
            <Buy price={price}/>
        </div>
    );
}
export default Card;
import style from './pagination.module.css';
import Buttons from './Buttons/Buttons';
import Page from './Page/Page';

const Pagination = ({ setArrow, arrow, cardLenght }) => {
    return (
        <div className={style.pagination}>
            <Page cardLenght={cardLenght} arrow={arrow}/>
            <Buttons setArrow={setArrow} arrow={arrow}/>
        </div>
    );
}
export default Pagination;

import style from './page.module.css';

const Page = ({ cardLenght, arrow }) => {
    const page = [];
    for (let i = 0; i < cardLenght; i++) {
        page.push( i == arrow? <div className={style.active} key={i}></div> : <div className={style.circle} key={i}></div> );
    }
    return (
        <div className={style.page}>
            {
                page.map(page => page)
            }
        </div>
    );
}
export default Page;
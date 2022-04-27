import style from './menu.module.css';

const Menu = ({ menu }) => {
    return (
        <div className={style.menu}>
            {
                menu.map((menu, index) => (
                    <div className={style.container} key={index}>
                        <h3>{menu.title}</h3>
                        {
                            menu.list.map((list, index) => <h5 key={index}>{list}</h5>)
                        }
                    </div>
                ))
            }
        </div>
    );
}
export default Menu;
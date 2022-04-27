import style from './button.module.css';

const Button = ({ visible, setVisible }) => {
    return (
        <div className={style.burger} style={{display: !visible? 'flex' : 'none'}} onClick={() => setVisible(true)}>
            <div className={style.line}></div>
            <div className={style.line}></div>
            <div className={style.line}></div>
        </div>
    );
}
export default Button;
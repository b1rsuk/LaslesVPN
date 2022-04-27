import style from './buttons.module.css';

const Button = props => {
    const { type, radius, fontSize, color, fontWeight, onClick, ...text } = props;

    const styleButton = {
        borderRadius: radius,
        fontSize: fontSize,
        color: color,
        fontWeight: fontWeight,
    }

    if (type == 'primary')
    return (
        <button style={styleButton} className={style.buttonPrimary + ' ' + style.button} onClick={onClick}>{text.children}</button>
    );

    if (type == 'outline') 
    return (
        <button style={styleButton} className={style.buttonOutline + ' ' + style.button} onClick={onClick}>{text.children}</button>
    );
}

export default Button;
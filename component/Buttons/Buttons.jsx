import style from './buttons.module.css';

const Button = props => {
    const { type, radius, fontSize, color, fontWeight, ...text } = props;

    const styleButton = {
        borderRadius: radius,
        fontSize: fontSize,
        color: color,
        fontWeight: fontWeight,
    }

    if (type == 'primary')
    return (
        <button style={styleButton} className={style.buttonPrimary + ' ' + style.button}>{text.children}</button>
    );

    if (type == 'outline') 
    return (
        <button style={styleButton} className={style.buttonOutline + ' ' + style.button}>{text.children}</button>
    );
}

export default Button;
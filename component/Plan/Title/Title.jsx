import style from './title.module.css';

const Title = () => {
    return (
        <div className={style.title}>
            <h2>Choose Your Plan</h2>
            <h5 className="miniText">Let's choose the package that is best for you and explore it happily and <br/>cheerfully.</h5>
        </div>
    );
}
export default Title;
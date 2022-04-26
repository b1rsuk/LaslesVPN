import style from './text.module.css';

const Text = () => {
    return (
        <div className={style.text}>
            <h3>Trusted by Thousands of<br/> Happy Customer</h3>
            <h5 className="miniText">These are the stories of our customers who have joined us with <br/>great pleasure when using this crazy feature.</h5>
        </div>
    );
}
export default Text;
import style from './submission.module.css';
import Text from './Text/Text';
import Eazy from './Eazy/Eazy';

const Submission = () => {
    return (
        <div className={style.submission}>
            <div className={style.container}>
                <Text />
                <Eazy />
            </div>
        </div>
    );
}

export default Submission;
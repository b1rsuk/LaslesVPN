import style from './submission.module.css';
import Text from './Text/Text';
import Illustration from './Illustration/Illustration';

const Submission = () => {
    return (
        <div className={style.submission}>
            <div className={style.container}>
                <Text />
                <Illustration/>
            </div>
        </div>
    );
}

export default Submission;
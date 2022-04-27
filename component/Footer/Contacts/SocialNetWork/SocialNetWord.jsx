import style from './socialNetWord.module.css';
import Image from 'next/image';

const SocialNetWord = () => {
    const social = [
        '/svg/facebook.svg',
        '/svg/twitter.svg',
        '/svg/instagram.svg',
    ];

    return (
        <div className={style.socialNetWord}>
            {
                social.map((src, index) => <Image key={index} src={src} width='100px' height='100px'/>)
            }
        </div>
    );
}
export default SocialNetWord;
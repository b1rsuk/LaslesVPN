import style from './company.module.css';
import Image from 'next/image';

const Company = () => {
    const company = [
        '/svg/netflix.svg',
        '/svg/reddit.svg',
        '/svg/amazon.svg',
        '/svg/discord.svg',
        '/svg/spotify.svg',
    ];
    return (
        <div className={style.company}>
            <div className={style.container}>
                {
                    company.map((src, index) => (
                        <Image src={src} width='150px' height='100px' key={index}/>
                    ))
                }
            </div>
        </div>
    );
}
export default Company;
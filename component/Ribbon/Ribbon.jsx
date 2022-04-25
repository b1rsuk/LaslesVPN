import style from './ribbon.module.css';
import Image from 'next/image';

const Ribbon = () => {
    const cards = [
        {src: '/svg/user.svg', text: ['90+', 'Users']},
        {src: '/svg/locations.svg', text: ['30+', 'Locations']},
        {src: '/svg/server.svg', text: ['50+', 'Servers']},
    ];
    return (
        <div className={style.ribbon}>
            {
                cards.map((item, index) => (
                    <div className={style.card} key={index}>
                        <div className={style.container} style={{
                            borderRight: cards.length - 1 == index? 'none' : '2px solid var(--white)' 
                        }}>
                            <div className={style.circle}>
                                <Image src={item.src} width='40px' height='40px'/>
                            </div>
                            <div className={style.text}>
                                <h3>{item.text[0]}</h3>
                                <h4>{item.text[1]}</h4>
                            </div>
                        </div>
                   </div>
                ))
            }
        </div>
    );
}
export default Ribbon;
import style from './menu.module.css';
import Image from 'next/image';

const List = () => {
    return (
        <ul className={style.menu}>
            <div className={style.container}>
             <div className={style.circle}>
                 <Image src='/svg/ok.svg' width='100px' height='110px'/>
             </div>
             <li>Powerfull online protection.</li>
            </div>
            <div className={style.container}>
             <div className={style.circle}>
                 <Image src='/svg/ok.svg' width='100px' height='110px'/>
             </div>
             <li>Internet without borders.</li>
            </div>
            <div className={style.container}>
             <div className={style.circle}>
                 <Image src='/svg/ok.svg' width='100px' height='110px'/>
             </div>
             <li>Supercharged VPN</li>
            </div>
            <div className={style.container}>
             <div className={style.circle}>
                 <Image src='/svg/ok.svg' width='100px' height='110px'/>
             </div>
             <li>No specific time limits.</li>
            </div>
        </ul>
    );
}
export default List;
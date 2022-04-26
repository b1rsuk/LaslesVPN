import style from './map.module.css';
import Image from 'next/image';

const Map = () => {
    return (
        <div className={style.map}>
            <Image src='/svg/map.svg' width='1100px' height='500px'/>
        </div>
    )
}
export default Map;
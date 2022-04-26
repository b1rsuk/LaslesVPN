import style from './countries.module.css';
import Text from './Text/Text';
import Map from './Map/Map';
import Company from './Company/Company';

const Countries = () => {
    return (
        <div className={style.countries}>
            <Text />
            <Map />
            <Company />
        </div>
    );
}
export default Countries;
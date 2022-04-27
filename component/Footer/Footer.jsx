import style from './footer.module.css';
import Contacts from './Contacts/Contacts';
import Menu from './Menu/Menu';

const Footer = () => {
    const menu = [
        {
            title: 'Product', 
            list: ['Download', 'Pricing', 'Locations', 'Server', 'Countries', 'Blog']
        },
        {
            title: 'Engage', 
            list: ['LaslesVPN ?', 'FAQ', 'Tutorials', 'About Us', 'Privacy Policy', 'Terms of Service']
        },
        {
            title: 'Earn Money', 
            list: ['Affiliate', 'Become Partner']
        },
    ]
    return (
        <div className={style.footer}>
            <Contacts />
            <Menu menu={menu}/>
        </div>
    );
}
export default Footer;
import style from './plan.module.css';
import Title from './Title/Title';
import Card from './Card/Card';

const Plan = () => {
    const card = [
        {
            title: 'Free Plan', 
            price: 'Free', 
            menu: ['Unlimited Bandwitch', 'Encrypted Connection', 'No Traffic Logs', 'Works on All Devices']
        },
        {
            title: 'Standard Plan', 
            price: '9$ / mo', 
            menu: ['Unlimited Bandwitch', 'Encrypted Connection', 'Yes Traffic Logs', 'Works on All Devices', 'Connect Anyware']
        },
        {
            title: 'Premium Plan', 
            price: '12$ / mo', 
            menu: ['Unlimited Bandwitch', 'Encrypted Connection', 'No Traffic Logs', 'Works on All Devices', 'Get New Features']
        },
    ]
    return (
        <div className={style.plan}>
            <Title />
            <div className={style.container}>
                {
                    card.map(card => (
                        <Card title={card.title} price={card.title} menu={card.menu}/>
                    ))
                }
            </div>
        </div>
    );
}
export default Plan;
import Text from './Text/Text';
import Card from './Card/Card';
import Pagination from './Pagination/Pagination';
import { useState, Fragment } from 'react';

const Comments = () => {
    const card = [
        [
            {
                name: 'Viezh Robert', 
                country: 'Warsaw, Poland', 
                grade: '4.5', 
                src: '/svg/robert.svg', 
                comment: '“Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best”.'
            },
            {
                name: 'Yessica Christy', 
                country: 'Shanxi, China', 
                grade: '4.5', 
                src: '/svg/chirsty.svg', 
                comment: '“I like it because I like to travel far and still can connect with high speed.”.'
            },
            {
                name: 'Kim Young Jou', 
                country: 'Seoul, South Korea', 
                grade: '4.5', 
                src: '/svg/jou.svg', 
                comment: '“This is very unusual for my business that currently requires a virtual private network that has high security.”.'
            },       
        ],
        [
            {
                name: 'Lorem', 
                country: 'Warsaw, Poland', 
                grade: '4.5', 
                src: '/svg/chirsty.svg', 
                comment: 'Lorem  delectus asperiores voluptas, enim ex architecto rerum maxime labore beatae earum mollitia, pariatur officiis!'
            },
            {
                name: 'Yessica Christy2', 
                country: 'Shanxi, China', 
                grade: '4.5', 
                src: '/svg/robert.svg', 
                comment: "dignissimos molestias facilis amet vel error adipisci ea numquam ad."
            },
            {
                name: 'Kim Young Jou3', 
                country: 'Seoul, South Korea', 
                grade: '4.5', 
                src: '/svg/jou.svg', 
                comment: '“This is very unusual for my business that currently requires a virtual private network that has high security.”.'
            },       
        ],
    ];

    const [arrow, setArrow] = useState(0);
    const setArrowProxy = new Proxy(setArrow, {
        apply(target, _, args) {
            if (args > card.length-1) return;
            if (args < 0) return;
            target(...args);
        }
    });

    return (
        <Fragment>
            <Text />
            <Card card={card[arrow]}/>
            <Pagination arrow={arrow} setArrow={setArrowProxy} cardLenght={card.length}/>
        </Fragment>
    );
}
export default Comments;
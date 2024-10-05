import React, {useState} from 'react';
import '../../styles/css/sidebar-nav.css';
import myTemplate from "../../img/template.svg";
import search from "../../img/search.svg";
import star from "../../img/star.png";
import clock from "../../img/clock.svg";
import board from "../../img/board.png";
import lock from "../../img/lock.png";
import boardClass from "../../img/board-class.svg";
import add from "../../img/add.svg";
import minus from "../../img/minus.svg";

function NavItem({item}) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleCollapse = () => {
        setIsOpen(!isOpen);
    };

    return <div>
        <div className={`sidebar__content__item__title ${item.collapsible ? 'collapsible' : ''}`} onClick={item.collapsible ? toggleCollapse : undefined}>
            <img src={item.icon} alt={item.title}/>
            <span>{item.title}</span>
            {item.collapsible && <img className="left" src={isOpen ? minus : add} alt="Collapsible"/>}
        </div>
        {item.items && <div className={`sidebar__content__item__list ${item.collapsible && !isOpen ? 'collapsed' : ''}`}>
            <ul>
                {item.items.map((item, indexS) => {
                    return <li key={indexS} className={item.className}>
                        <img src={item.icon} alt={item.title}/>
                        <span>{item.title}</span>
                    </li>
                })}
            </ul>
        </div>
        }
    </div>;
}

function Nav() {
    const items = [
        {
            title: 'My templates',
            icon: myTemplate,
        },
        {
            title: 'Search',
            icon: search,
            items: [
                {
                    title: 'Software Engineer',
                    icon: star,
                },
                {
                    title: 'Computer hardware engineer',
                    icon: star,
                },
                {
                    title: 'Network Engineer',
                    icon: star,
                },
                {
                    title: 'Technical Support',
                    icon: star,
                },
                {
                    title: 'Network administrator',
                    icon: star,
                },
                {
                    title: 'Management',
                    icon: star,
                },
                {
                    title: 'Data analysis',
                    icon: star,
                },
                {
                    title: 'Computer technician',
                    icon: star,
                },
                {
                    title: 'Past search 1',
                    className: 'past-search',
                    icon: clock,
                },
                {
                    title: 'Past search 2',
                    className: 'past-search',
                    icon: clock,
                },
                {
                    title: 'Computers and information...',
                    className: 'past-search',
                    icon: clock,
                },
                {
                    title: 'Database Administrator',
                    className: 'past-search',
                    icon: clock,
                },
                {
                    title: 'Computer security',
                    className: 'past-search',
                    icon: clock,
                },
                {
                    title: 'Computer Systems Analyst',
                    className: 'past-search',
                    icon: clock,
                },
            ],
        },
        {
            title: 'My boards',
            icon: boardClass,
            collapsible: true,
            items: [
                {
                    title: 'Board 1',
                    icon: board,
                },
                {
                    title: 'Board 2',
                    icon: board,
                },
                {
                    title: 'Board 3',
                    icon: board,
                },
                {
                    title: 'Board agent 1',
                    icon: lock,
                },
                {
                    title: 'Board agent 1',
                    icon: lock,
                },
                {
                    title: 'Board agent 1',
                    icon: lock,
                },
            ],
        },
    ];
    return <div className="sidebar__content">
        <div className="sidebar__content__item">
            {items.map((item, index) => {
                return <NavItem key={index} item={item}/>;
            })}
        </div>
    </div>
        ;
}

export default Nav;
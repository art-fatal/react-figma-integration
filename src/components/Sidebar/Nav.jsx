import React from 'react';
import '../../styles/css/sidebar-nav.css';
import myTemplate from "../../img/template.svg";
import search from "../../img/search.svg";
import star from "../../img/star.png";
import clock from "../../img/clock.svg";
import board from "../../img/board.png";
import lock from "../../img/lock.png";
import boardClass from "../../img/board-class.svg";
import add from "../../img/add.svg";

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
                    title: 'Network engineer',
                    icon: star,
                },
                {
                    title: 'Technical support',
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
                    icon: clock,
                },
                {
                    title: 'Past search 2',
                    icon: clock,
                },
                {
                    title: 'Computers and information...',
                    icon: clock,
                },
                {
                    title: 'Database Administrator',
                    icon: clock,
                },
                {
                    title: 'Computer security',
                    icon: clock,
                },
                {
                    title: 'Computer Systems Analyst',
                    icon: clock,
                },
            ],
        },
        {
            title: 'My boards',
            icon: boardClass,
            left: {
                icon: add
            },
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
                return <>
                    <div className="sidebar__content__item__title" key={index}>
                        <img src={item.icon} alt={item.title}/>
                        <span>{item.title}</span>
                        {item.left && <img className="left" src={item.left.icon} alt={item.left.title}/>}
                    </div>
                    {item.items && item.items.map((item, indexS) => {
                        return <div className="sidebar__content__item__list" key={indexS}>
                            <ul>
                                <li>
                                    <img src={item.icon} alt={item.title}/>
                                    <span>{item.title}</span>
                                </li>
                            </ul>
                        </div>;
                    })}
                </>;
            })}
        </div>
    </div>;
}

export default Nav;
import React, { useState } from 'react';
import './AccordionStyle.css';
const Accordion = ({ items }) => {

    const [activeIndex, setActiveIndex] = useState(null);
    // const [count, setCount] = useState(null);


    const onTitleClick = (index) => {
        if (activeIndex === index) {
            setActiveIndex(null);
        } else {
            setActiveIndex(index);
        }
    }

    // const onCounterClick = () => {
    //     setCount(count+1);
    // }

    const QuizTiles = (items.map((item, index) => {

        const active = index === activeIndex ? 'active' : '';

        return (
            // <div className="">
            //     <div onClick={() => onCounterClick()}>Counter</div>
            //     <div className="">{count}</div>
            // </div>

            <div key={item.title} >
                <div className={"title " + active} onClick={() => onTitleClick(index)}>
                    {item.title}
                    <i className="dropdown icon"></i>
                </div>
                <div className={"content " + active}>{item.content}</div>
            </div>

        )
    }
    ))

    return (
        <div className='ui styled accordion' >
            {QuizTiles}
        </div>


    )

};

export default Accordion;


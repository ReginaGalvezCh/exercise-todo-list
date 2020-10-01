import React, { useState } from 'react';
import './Listitems.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import FlipMove from 'react-flip-move';

function ListItems(props) {
    const items = props.items;
    const [inHover, setHover] = useState(false);
    const listItems = items.map(item => {
        return <div className="list" key={item.key}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)} >
            <p >{item.text}
                {inHover && <span className="hover">
                    <FontAwesomeIcon className="faicons" icon='trash'
                        onClick={() => props.deleteItem(item.key)
                        }></FontAwesomeIcon>
                </span>}

            </p>

        </div>
    }

    )
    return (

        <div>
            <FlipMove duration={500} easing="ease-in">
                {listItems}
            </FlipMove>
        </div>
    )
}
export default ListItems;

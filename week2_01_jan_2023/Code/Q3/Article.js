import React from "react";

const items = ['Item1', 'Item2', 'Item3', 'Item4', 'Item5'];

const itemList = items.map((item, index) => {
    return <li id = {index} key = {index}>{item}</li>
});

export default function Article ({name}) {
    return (
        <ul>
            {itemList}
            <li>{name}</li>
        </ul>
    )
}
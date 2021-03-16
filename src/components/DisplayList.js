import React from 'react'

function DisplayList(props) {
    return (
        <div>
            <ul>
                {props.items.map((item , index) => (
                <li key={index}>{item.text}</li>
                ))}
            </ul>
        </div>
    )
}

export default DisplayList

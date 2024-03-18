import React from 'react'

export default function Navbaritem(props) {
    return (
        <>
            <p>{props.icon}<span style={{ marginLeft: '20px' }}>{props.text}</span></p>
        </>
    )
}

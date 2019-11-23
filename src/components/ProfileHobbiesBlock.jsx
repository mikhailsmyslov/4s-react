import React from 'react'

export default (props) => {
    const { hobbies } = props
    return (
        <>
        <h4>Hobbies</h4>
        <hr />
        <p>{hobbies}</p>
        </>
    )
}
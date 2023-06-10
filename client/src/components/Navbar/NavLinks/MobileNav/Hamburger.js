import React from 'react'
import styled from 'styled-components'

const Hamburger = ({ onClick }) => {
    return (
        <Styled onClick={onClick}>
            <div className='hamburger-container'>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </Styled>
    )
}

const Styled = styled.div`
    padding: 3px;
    cursor: pointer;
    .hamburger-container {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        width: 25px;
        height: 25px;
    }
    .hamburger-container span {
        display: block;
        width: 100%;
        height: 3px;
        border-radius: 1px;
        background-color: black;
    }
`
export default Hamburger

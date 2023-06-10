import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const MobileMenu = ({ menuIsOpen, toggleMenu, links }) => {
    const position = {
        right: menuIsOpen ? '0' : '-300px'
    }
    const overlay = {
        visibility: menuIsOpen ? 'visible' : 'hidden',
        opacity: menuIsOpen ? '0.6' : '0'
    }
    return (
        <Styled>
            <div className='menu' style={position}>
                <div className='menu-header'>
                    <strong onClick={toggleMenu}>CLOSE X</strong>
                </div>
                <ul>
                    {Object.keys(links)?.map((key) => {
                        return (
                            <NavLink
                                key={key}
                                to={links[key]}
                                onClick={toggleMenu}
                            >
                                <li>{key}</li>
                            </NavLink>
                        )
                    })}
                </ul>
            </div>
            <div className='overlay' style={overlay} onClick={toggleMenu}></div>
        </Styled>
    )
}

const Styled = styled.div`
    .overlay {
        background-color: black;
        position: absolute;
        display: block;
        top: 0;
        right: 0;
        height: 100vh;
        width: 100vw;
        transition: all 0.5s ease-in-out;
    }
    .menu {
        background-color: white;
        width: 300px;
        max-width: 100vw;
        height: 100vh;
        position: fixed;
        top: 0;
        z-index: 100;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        transition: right 0.5s ease-in-out;
    }
    .menu-header {
        height: 3.5rem;
        display: flex;
        align-items: center;
        background: white;
    }
    strong {
        cursor: pointer;
        margin: 0 1rem 0 auto;
        color: #c43642;
    }
    ul {
        list-style: none;
        display: flex;
        flex-direction: column;
    }
    a {
        display: inline-block;
        padding: 1rem;
        text-decoration: none;
        color: black;
    }
    a:hover {
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        background-color: #c4364210;
    }
    .active {
        background-color: #c4364210;
    }
`

export default MobileMenu

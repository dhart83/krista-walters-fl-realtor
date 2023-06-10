import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const DesktopMenu = ({ toggleMenu, links }) => {
    return (
        <Styled>
            <ul>
                {Object.keys(links)?.map((key) => {
                    return (
                        <NavLink key={key} to={links[key]} onClick={toggleMenu}>
                            <li>{key}</li>
                        </NavLink>
                    )
                })}
            </ul>
        </Styled>
    )
}

const Styled = styled.div`
    height: 100%;
    ul {
        list-style: none;
        display: flex;
        height: 100%;
        justify-content: center;
        align-items: center;
    }
    li {
        height: 100%;
    }
    a {
        display: inline-block;
        padding: 1rem;
        text-decoration: none;
        color: black;
        height: 100%;
    }
    a:hover {
        color: #c43642;
    }
    ul a:last-child {
        background-color: #c43642;
        color: white;
        border-radius: 3px;
        padding: 8px 20px;
    }
`

export default DesktopMenu

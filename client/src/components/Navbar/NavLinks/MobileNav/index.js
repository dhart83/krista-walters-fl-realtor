import React, { useState } from 'react'
import styled from 'styled-components'
import Hamburger from './Hamburger'
import MobileMenu from './MobileMenu'

const MobileNav = ({ links }) => {
    const [menuIsOpen, setMenuIsOpen] = useState(false)
    const toggle = () => {
        setMenuIsOpen(!menuIsOpen)
    }
    return (
        <Styled>
            <Hamburger onClick={toggle} />
            <MobileMenu
                menuIsOpen={menuIsOpen}
                toggleMenu={toggle}
                links={links}
            />
        </Styled>
    )
}

const Styled = styled.div``

export default MobileNav

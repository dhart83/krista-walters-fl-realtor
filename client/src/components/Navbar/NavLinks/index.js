import React from 'react'
import styled from 'styled-components'
import MobileNav from './MobileNav'
import DesktopNav from './DesktopNav'

const NavLinks = ({ links, isMobile }) => {
    return (
        <Styled>
            {isMobile ? (
                <MobileNav links={links} />
            ) : (
                <DesktopNav links={links} />
            )}
        </Styled>
    )
}

const Styled = styled.nav`
    display: flex;
    justify-content: center;
    align-items: center;
`

export default NavLinks

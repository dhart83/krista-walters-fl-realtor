import React from 'react'
import styled from 'styled-components'
import DesktopMenu from './DesktopMenu'

const DesktopNav = ({ links }) => {
    return (
        <Styled>
            <DesktopMenu links={links} />
        </Styled>
    )
}

const Styled = styled.div``

export default DesktopNav

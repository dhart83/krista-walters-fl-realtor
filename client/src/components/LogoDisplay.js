import React from 'react'
import styled from 'styled-components'
import KWLogo from '../assets/keller-williams-realty-logo.svg'
import Realtor from '../assets/Realtor.svg'
import EQHousing from '../assets/equal-housing.svg'

//
const LogoDisplay = () => {
    return (
        <LogoBlock>
            <h2>Esteemed Partners and Affiliations</h2>
            <div className='divider'></div>
            <div className='logo-container'>
                <Realtor className='logo' />
                <KWLogo className='logo' />
                <EQHousing className='logo' />
            </div>
        </LogoBlock>
    )
}

const LogoBlock = styled.div`
    h2 {
        text-align: center;
    }
    .divider {
        margin-inline: auto;
    }
    .logo-container {
        display: flex;
        justify-content: space-around;
    }
    .logo {
        height: 80px;
        width: auto;
    }
    @media (max-width: 767px) {
        .logo {
            height: 60px;
        }
    }
`

export default LogoDisplay

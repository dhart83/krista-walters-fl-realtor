import React from 'react'
import styled from 'styled-components'

import BrandLogo from '../assets/Krista Walters.png'
import FBLogo from '../assets/facebook-icon-1.svg'
import IGLogo from '../assets/instagram-glyph-1.svg'

const Footer = () => {
    let date = new Date()
    let year = date.getFullYear()
    return (
        <FooterBlock className='section footer'>
            <div className='brand-logo'>
                <img src={BrandLogo} alt='Krista Walters Realtor Logo' />
            </div>
            <div className='container grid'>
                <div className='col'>
                    <b>
                        <p>Follow Me</p>
                    </b>
                    <div className='social-links'>
                        <a
                            className='icon'
                            href='https://www.facebook.com/profile.php?id=100092369121965'
                            target='_blank'
                        >
                            <FBLogo height='25px' width='25px' />
                        </a>
                        <a
                            className='icon'
                            href='https://www.instagram.com/kw_fl_realestate/'
                            target='_blank'
                        >
                            <IGLogo height='25px' width='25px' />
                        </a>
                    </div>
                </div>
                <div className='col'>
                    <b>
                        <p>Keller Williams Town & Country Realty</p>
                    </b>
                    <div className='info-container'>
                        <p className='address'>
                            1520 Killearn Ctr. Blvd. Tallahasse, FL. 32309
                            <br />
                            Mobile: 727-280-7627
                            <br />
                            Office: 850-201-4663
                        </p>
                    </div>
                </div>
            </div>
            <div className='divider'></div>
            <div className='copyright-container'>
                <p className='copyright'>
                    Copyright &copy; {year} Krista Walters Realtor. All Rights
                    Reserved
                </p>
                <p className='copyright'>
                    Website Designed & Developed by{' '}
                    <a
                        className='dev-link'
                        href='https://www.donniehartman.com'
                        target='_blank'
                    >
                        Donnie Hartman
                    </a>
                </p>
            </div>
        </FooterBlock>
    )
}

const FooterBlock = styled.div`
    margin-top: auto;
    background-color: rgb(255, 226, 228);
    padding: 2rem 0 1rem 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    .grid {
        margin-bottom: 1rem;
    }

    .col {
        display: flex;
        flex-direction: column;
        text-align: center;
    }

    img {
        max-width: 200px;
        margin: auto 0 2rem 0;
    }

    ul {
        display: flex;
        justify-content: space-around;
    }

    li {
        list-style-type: none;
        font-size: 12px;
    }

    a {
        padding: 0.25rem 0;
        text-decoration: none;
        color: #333;
    }
    p {
        margin-bottom: 0.5rem;
        font-size: 12px;
        line-height: 1rem;
    }
    .logo {
        margin-inline: 2rem;
    }
    .icon {
        padding: 0.5rem;
        margin: -0.5rem 0 2rem 0;
        display: inline-block;
        width: fit-content;
        height: fit-content;
    }
    .info-container {
        display: flex;
    }
    .title {
        font-weight: bold;
    }
    .copyright {
        text-align: center;
        margin: 0;
        margin-top: auto;
    }
    .dev-link {
        padding: 0;
    }

    @media (max-width: 1300px) {
        .grid {
            gap: 3rem;
        }
        .info-container {
            flex-direction: column;
        }
    }
    @media (max-width: 767px) {
        .address {
            line-height: 1.25rem;
        }
    }
    @media (max-width: 500px) {
        .grid {
            grid-template-columns: 1fr;
            grid-template-rows: auto;
        }
        img {
            margin-bottom: 2rem;
        }
        .col:nth-child(2) {
            grid-row: 3;
        }
        .col:nth-child(3) {
            grid-row: 2;
        }
    }
    @media (max-width: 320px) {
        .logo-container {
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        .logo:nth-child(1) {
            margin-bottom: 3rem;
        }
    }
`

export default Footer

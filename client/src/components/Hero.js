import React from 'react'
import styled from 'styled-components'
import HeroImage from '../assets/hero-image.jpg'
import { Link } from 'react-router-dom'

const Hero = () => {
    return (
        <HeroBlock className='section section--hero'>
            <div className='container container--hero'>
                <div className='content-holder'>
                    <h1>Your Trusted Partner in Real Estate</h1>
                    <p>
                        As your dedicated Florida realtor, I am commited to
                        delivering an exceptional experience that exceeds your
                        expectations.
                    </p>
                    <div className='divider'></div>
                    <div className='btn-holder'>
                        <Link className='btn' to='/contact'>
                            <button className='btn-primary span'>
                                Get in touch
                            </button>
                        </Link>
                        <a className='btn' href='#bio-section'>
                            <button className='btn-secondary span'>
                                Read my bio
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </HeroBlock>
    )
}

const HeroBlock = styled.div`
    background: url(${HeroImage}) rgba(0, 0, 0, 0.25);
    background-blend-mode: overlay;
    background-position: center;
    background-size: cover;
    height: 550px;
    display: flex;
    .container--hero {
        display: grid;
        grid-template-columns: 1.5fr 1fr;
        gap: 1rem;
        margin-top: auto;
        margin-bottom: 0;
    }
    .content-holder {
        padding: 50px;
        background-color: rgba(0, 0, 0, 0.8);
    }
    h1,
    p {
        color: white;
    }
    .btn {
        margin-right: 1rem;
    }

    @media (max-width: 1080px) {
        .container--hero {
            grid-template-columns: 2fr 1fr;
        }
    }

    @media (max-width: 700px) {
        .container--hero {
            grid-template-columns: 1fr;
        }
    }

    @media (max-width: 500px) {
        padding: 1rem 0;
        .container--hero {
            margin-inline: 1rem;
        }
        .content-holder {
            padding: 1.5rem;
        }
        .btn-holder {
            display: flex;
            flex-direction: column;
        }
        a:first-child {
            margin-bottom: 1rem;
        }
        .span {
            width: 100%;
        }
    }
`

export default Hero

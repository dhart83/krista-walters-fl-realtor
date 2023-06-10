import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import BioPic from '../assets/krista-walters-headshot.jpg'

const Bio = () => {
    return (
        <BioBlock>
            <div className='img-holder'>
                <img src={BioPic} alt='' />
            </div>
            <div className='content'>
                <h2>Krista Walters: Where Expertise and Passion Meet!</h2>
                <div className='divider'></div>
                <p>
                    Krista Walters is a licensed Florida realtor with a passion
                    for helping clients find their dream homes. With a
                    background in mechanical engineering and a master's degree
                    in the field, Krista brings a unique perspective to the
                    world of real estate. Her design experience in engineering,
                    coupled with her experience in housing improvements such as
                    roofing, renovation work, and HVAC, allows her to offer
                    valuable insights to clients seeking both functional and
                    aesthetically pleasing properties.
                </p>
                <p>
                    Krista takes great pride in listening to her clients' needs
                    and providing effective solutions tailored to their specific
                    requirements. Her dedication to exceptional customer service
                    and her ability to understand her clients' desires allow her
                    to guide them through the real estate process with ease. As
                    part of the Keller Williams family, an international company
                    with over 190,000 agents, Krista has access to endless
                    support and resources, ensuring she stays up-to-date with
                    industry trends and can deliver top-notch service to her
                    clients.
                </p>
                <p>
                    Whether you're a first-time homebuyer, looking to sell your
                    property, or seeking investment opportunities, Krista
                    Walters is here to assist you every step of the way. With
                    her experience, market knowledge, and unwavering commitment
                    to client satisfaction, Krista strives to make your real
                    estate journey a seamless and rewarding experience. Contact
                    Krista today and let her help you turn your real estate
                    goals into reality.
                </p>
                <Link to='/contact'>
                    <button className='btn-primary btn'>
                        Connect with Krista Walters
                    </button>
                </Link>
            </div>
        </BioBlock>
    )
}

const BioBlock = styled.div`
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 4rem;
    justify-items: end;
    margin-top: 50px;
    img {
        width: 100%;
        height: auto;
        object-fit: cover;
        margin-bottom: 2rem;
    }
    .content {
        margin-right: auto;
        margin-top: -0.9rem;
    }
    p {
        text-align: justify;
    }
    .logo-holder {
        display: flex;
    }
    .logo {
        height: 60px;
        width: auto;
        margin: auto;
    }
    .btn {
        margin-top: 1.5rem;
    }

    @media (max-width: 1300px) {
        margin-top: 0;
        margin-top: 70px;
    }
    @media (max-width: 990px) {
        gap: 2rem;
        margin-top: 30px;
    }
    @media (max-width: 767px) {
        margin-top: 0;
        grid-template-columns: 1fr;
        .img-holder {
            width: 50%;
            margin-inline: auto;
        }
    }
`

export default Bio

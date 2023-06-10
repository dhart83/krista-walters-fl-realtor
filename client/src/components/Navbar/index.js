import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import BrandBlock from './BrandBlock'
import NavLinks from './NavLinks'

const Navbar = ({ brand, links }) => {
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        const mediaQuery = window.matchMedia('(max-width: 768px)')

        const handleResize = (e) => {
            setIsMobile(e.matches)
        }

        // Initial check on component mount
        setIsMobile(mediaQuery.matches)

        // Add event listener to listen for changes in screen width
        mediaQuery.addEventListener('change', handleResize)

        // Clean up the event listener on component unmount
        return () => {
            mediaQuery.removeEventListener('change', handleResize)
        }
    }, [])

    return (
        <Styled>
            <div className='navbar container'>
                <BrandBlock link={brand.link} img={brand.img} alt={brand.alt} />
                <NavLinks links={links} isMobile={isMobile} />
            </div>
        </Styled>
    )
}

const Styled = styled.header`
    background-color: white;
    position: sticky;
    top: 0;
    z-index: 1000;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    .navbar {
        display: flex;
        justify-content: space-between;
        padding: 0;
        height: 90px;
    }
`

export default Navbar

import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const BrandBlock = ({ link, img, alt }) => {
    return (
        <Styled>
            <Link to={link}>
                <img src={img} alt={alt} />
            </Link>
        </Styled>
    )
}

const Styled = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    strong {
        display: inline-block;
    }
    a {
        display: flex;
    }
    img {
        max-width: 200px;
        max-height: 80px;
        padding: 0;
        margin: 0;
    }
`

export default BrandBlock

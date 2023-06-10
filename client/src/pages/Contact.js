import React from 'react'
import styled from 'styled-components'
import ContactForm from '../components/ContactForm'

const Contact = () => {
    return (
        <ContactPage>
            <div className='container container--hero'>
                <div className='content-holder'>
                    <h1>I'd love to hear from you!</h1>
                </div>
            </div>
            <div className='section'>
                <div className='container'>
                    <ContactForm />
                </div>
            </div>
        </ContactPage>
    )
}

const ContactPage = styled.div`
    .container--hero {
        padding-top: 90px;
    }
    .section--hero {
        background-color: rgb(255, 226, 228);
        padding: 8rem 0 2rem 0;
    }
    h1 {
        margin: 0;
    }
`

export default Contact

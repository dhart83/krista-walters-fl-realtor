import React, { useState } from 'react'
import styled from 'styled-components'
import { useForm, ValidationError } from '@formspree/react'

const ContactForm = () => {
    const [submitted, setSubmitted] = useState(false)
    const [state, handleSubmit] = useForm('mvonjyql') //krista
    // const [state, handleSubmit] = useForm('mrgvvwrw') //donnie

    if (state.succeeded) {
        return (
            <h3
                style={{
                    color: 'green',
                    backgroundColor: '#eefdef',
                    textAlign: 'center',
                    padding: '1.5rem 0 1.5rem 0',
                    borderRadius: '3px'
                }}
            >
                Thanks for reaching out!
                <br />I have received your message and will get back to you as
                soon as possible.
            </h3>
        )
    }

    return (
        <FormBlock>
            <h2>Get in Touch</h2>
            <p className='form-paragraph'>
                Don't hesitate to reach out using the contact form below. I
                strive to respond promptly, within one business day. I'm here to
                help!
            </p>
            <div className='divider'></div>
            <form onSubmit={handleSubmit} className='contact'>
                <input
                    type='text'
                    name='username'
                    style={{ opacity: '0', position: 'absolute' }}
                ></input>
                <div className='upper-fields'>
                    <div className='field-container'>
                        <label htmlFor='name' className='field-label'>
                            Name
                        </label>
                        <input
                            type='text'
                            id='name'
                            name='name'
                            className='text-field'
                            required
                        />
                        <ValidationError
                            prefix='Name'
                            field='name'
                            errors={state.errors}
                        />
                    </div>
                    <div className='field-container'>
                        <label htmlFor='email' className='field-label'>
                            Email Address
                        </label>
                        <input
                            type='email'
                            id='email'
                            name='email'
                            className='text-field'
                            required
                        />
                        <ValidationError
                            prefix='Email'
                            field='email'
                            errors={state.errors}
                        />
                    </div>
                    <div className='field-container'>
                        <label htmlFor='phone' className='field-label'>
                            Phone Number (Optional)
                        </label>
                        <input
                            type='tel'
                            id='phone'
                            name='phone'
                            className='text-field'
                        />
                        <ValidationError
                            prefix='Phone'
                            field='phone'
                            errors={state.errors}
                        />
                    </div>
                </div>
                <div className='field-container'>
                    <label htmlFor='message' className='field-label'>
                        Message (Optional)
                    </label>
                    <textarea
                        id='message'
                        name='message'
                        rows='3'
                        className='text-field'
                    />
                    <ValidationError
                        prefix='Message'
                        field='message'
                        errors={state.errors}
                    />
                </div>
                <button type='submit' disabled={state.submitting}>
                    Submit
                </button>
            </form>
        </FormBlock>
    )
}

const FormBlock = styled.div`
    background-color: var(--color-bg-dark);
    padding: 60px 90px;

    form {
        display: flex;
        flex-direction: column;
    }
    p {
        width: 50%;
    }
    .upper-fields {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 1rem;
    }
    .field-container {
        display: flex;
        flex-direction: column;
    }
    .field-label {
        margin-bottom: 5px;
        text-transform: uppercase;
        font-weight: bold;
    }
    .text-field {
        margin-bottom: 30px;
        border: 1px solid #cacaca;
    }
    button {
        background-color: var(--color-primary);
        color: white;
        padding: 10px 40px;
        border: none;
        text-transform: uppercase;
        align-self: flex-end;
    }

    @media (max-width: 1300px) {
        p {
            width: 60%;
        }
    }

    @media (max-width: 1080px) {
        p {
            width: 80%;
        }
    }
    @media (max-width: 990px) {
        p {
            width: auto;
        }
        .upper-fields {
            grid-template-columns: 1fr;
            gap: 0;
        }
        button {
            align-self: stretch;
        }
    }
    @media (max-width: 767px) {
        padding: 60px 60px;
        .text-field {
            margin-bottom: 1.5rem;
        }
    }

    @media (max-width: 500px) {
        padding: 1.5rem;
    }
`

export default ContactForm

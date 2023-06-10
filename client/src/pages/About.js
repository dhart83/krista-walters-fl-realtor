import React from 'react'
import Lottie from 'lottie-react'
import styled from 'styled-components'

import UCLottie from '../assets/under-construction.json'

const About = () => {
    return (
        <>
            <div className='section'>
                <div className='container'>
                    <Lottie
                        style={{
                            height: '50vh',
                            width: '100%',
                            alignSelf: 'center'
                        }}
                        animationData={UCLottie}
                        loop={true}
                    />
                </div>
            </div>
        </>
    )
}

export default About

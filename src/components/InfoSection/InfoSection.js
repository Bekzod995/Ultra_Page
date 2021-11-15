import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Container } from '../../globalStyles'
import { InfoSec } from './InfoSection.element'
import { Inforow, InfoColumn, TextWrapper, TopLine, Heading, Subtitle, ImgWrapper, Img } from './InfoSection.element'
// import img from '../../images/1.png'

function InfoSection({ lightBg, imgStart, lightTopline, lightTextDesc, buttonLabel, headline, description, lightText, topline, primary, img,  alt, start }) {
    return (
        <>
            <InfoSec lightBg={lightBg}>
                <Container>
                    <Inforow imgStart={imgStart}>
                        <InfoColumn>
                            <TextWrapper>
                                <TopLine lightTopline={lightTopline}>{topline}</TopLine>
                                <Heading lightText={lightText}>{headline}</Heading>
                                <Subtitle lightTextDesc={lightTextDesc}>{description} </Subtitle>
                                <Link to='/sign-up'>
                                    <Button big fontBig primary={primary}>{buttonLabel}</Button>
                                </Link>
                            </TextWrapper>
                        </InfoColumn>
                        <InfoColumn>
                            <ImgWrapper start={start}>
                                <Img src={img} alt={alt} />
                            </ImgWrapper>
                        </InfoColumn>
                    </Inforow>
                </Container>
            </InfoSec>
        </>
    )
}

export default InfoSection

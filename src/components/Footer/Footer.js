import React from 'react'
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaTelegram,  } from 'react-icons/fa';
import { Button } from '../../globalStyles.js';
import {
    FooterContainer, FooterSubHeading, FooterSubsciption, FooterSubText, Form, FormInput,
    FooterLinksContainer, FooterLinksWrapper, FooterLinksItems, FooterLinksTittle, FooterLink, SocialMedia,
    SocialIcon, SocialIconLink, SocialIcons, SocialLogo, SocialMediaWrap, WebsiteRight,
} from "./Footer.element.js";

function Footer() {
    return (
        <FooterContainer>
            <FooterSubsciption>
                <FooterSubHeading>
                    Join our exclusive membershib to receive the latest news and trends
                </FooterSubHeading>
                <FooterSubText>
                    You can unsubscribe at any time.
                </FooterSubText>
                <Form>
                    <FormInput name="email" type="email" placeholder="Your Email" />
                    <Button fontBig>Subscribe</Button>
                </Form>
            </FooterSubsciption>
            <FooterLinksContainer>
                <FooterLinksWrapper>
                    <FooterLinksItems>
                        <FooterLinksTittle>About Us</FooterLinksTittle>
                        <FooterLink to='/sign-up'>How it works </FooterLink>
                        <FooterLink to='/'>Testimonials </FooterLink>
                        <FooterLink to='/'>Careers </FooterLink>
                        <FooterLink to='/'>Investors </FooterLink>
                        <FooterLink to='/'>Terms of Service </FooterLink>
                    </FooterLinksItems>
                    <FooterLinksItems>
                        <FooterLinksTittle>Contact Us</FooterLinksTittle>
                        <FooterLink to='/sign-up'>Contact </FooterLink>
                        <FooterLink to='/'>Support </FooterLink>
                        <FooterLink to='/'>Destination </FooterLink>
                        <FooterLink to='/'>SponsonShip </FooterLink>
                    </FooterLinksItems>
                </FooterLinksWrapper>
                <FooterLinksWrapper>

                    <FooterLinksItems>
                        <FooterLinksTittle>Videos</FooterLinksTittle>
                        <FooterLink to='/sign-up'>Submit Video </FooterLink>
                        <FooterLink to='/'>Ambassadors </FooterLink>
                        <FooterLink to='/'>Agency </FooterLink>
                        <FooterLink to='/'>Influencer </FooterLink>
                    </FooterLinksItems>
                    <FooterLinksItems>
                        <FooterLinksTittle>Social Media</FooterLinksTittle>
                        <FooterLink to='/sign-up'>Facebook </FooterLink>
                        <FooterLink to='/'>Instagram </FooterLink>
                        <FooterLink to='/'>Telegram </FooterLink>
                        <FooterLink to='/'>Linkedin </FooterLink>
                    </FooterLinksItems>
                </FooterLinksWrapper>
            </FooterLinksContainer>
            <SocialMedia>
                <SocialMediaWrap>
                    <SocialLogo to='/'>
                        <SocialIcon />
                        ULTRA
                    </SocialLogo>
                    <WebsiteRight>
                        ULTRA @ 2021
                    </WebsiteRight>
                    <SocialIcons>
                        <SocialIconLink href='/' target="_blank" aria-label="Facebook">
                            <FaFacebook />
                        </SocialIconLink>
                        <SocialIconLink href='/' target="_blank" aria-label="Instagram">
                            <FaInstagram />
                        </SocialIconLink>
                        <SocialIconLink href={"https://t.me/bekzodd_20"} target="_blank" aria-label="Telegram" rel="noopener nooferrer">
                            <FaTelegram />
                        </SocialIconLink>
                        <SocialIconLink href='/' target="_blank" aria-label="Linkedin">
                            <FaLinkedin />
                        </SocialIconLink>
                        <SocialIconLink href='/' target="_blank" aria-label="Github">
                            <FaGithub />
                        </SocialIconLink>
                    </SocialIcons>
                </SocialMediaWrap>
            </SocialMedia>

        </FooterContainer>
    )
}

export default Footer

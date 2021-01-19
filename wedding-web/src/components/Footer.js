import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle> About Us</FooterLinkTitle>
              <FooterLink to="/home">How it works</FooterLink>
              <FooterLink to="/home">How it works</FooterLink>
              <FooterLink to="/home">How it works</FooterLink>
              <FooterLink to="/home">How it works</FooterLink>
              <FooterLink to="/home">How it works</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle> About Us</FooterLinkTitle>
              <FooterLink to="/home">How it works</FooterLink>
              <FooterLink to="/home">How it works</FooterLink>
              <FooterLink to="/home">How it works</FooterLink>
              <FooterLink to="/home">How it works</FooterLink>
              <FooterLink to="/home">How it works</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle> About Us</FooterLinkTitle>
              <FooterLink to="/home">How it works</FooterLink>
              <FooterLink to="/home">How it works</FooterLink>
              <FooterLink to="/home">How it works</FooterLink>
              <FooterLink to="/home">How it works</FooterLink>
              <FooterLink to="/home">How it works</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle> About Us</FooterLinkTitle>
              <FooterLink to="/home">How it works</FooterLink>
              <FooterLink to="/home">How it works</FooterLink>
              <FooterLink to="/home">How it works</FooterLink>
              <FooterLink to="/home">How it works</FooterLink>
              <FooterLink to="/home">How it works</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/">BorsyVideo</SocialLogo>
            <WebsiteRights>
              BorsyVideo © {new Date().getFullYear() + " "}
              All rights reserved.
            </WebsiteRights>
            <SocialIcons>
              <SocialIconLink
                href="https://www.facebook.com/borsyvideo.hu"
                target="_blank"
                aria-label="Facebook"
              >
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink
                href="https://www.instagram.com/borsyvideo/"
                target="_blank"
                aria-label="Instagram"
              >
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink
                href="https://www.youtube.com/user/borsyvideo"
                target="_blank"
                aria-label="Youtube"
              >
                <FaYoutube />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
/*padding: 5rem calc((100vw - 1100px) / 2);
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  color: #000*/
const FooterContainer = styled.div`
  background: #101522;
`;

const FooterWrap = styled.div`
  padding: 48px 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1100px;
  margin: 0 auto;
`;
const FooterLinksContainer = styled.div`
  display: flex;
  justify-content: center;

  @media scree and (max-width: 820px) {
    padding-top: 32px;
  }
`;
//grid-template-columns: repeat(2, 1fr);
const FooterLinksWrapper = styled.div`
  display: flex;
  @media screend and(max-width: 820px) {
    flex-direction: column;
  }
`;

const FooterLinkItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 16px;
  text-align: left;
  width: 160px;
  box-sizing: border-box;
  color: #fff;

  @media screen and (max-width: 400px) {
    padding: 10px;
    margin: 0;
    width: 100%;
  }
`;

const FooterLink = styled(Link)`
  color: #fff;
  text-decoration: none;

  font-size: 14px;
  margin-bottom: 0.5rem;

  &:hover {
    color: #01bf71;
    transition: 0.3 ease-out;
  }
`;
const FooterLinkTitle = styled(Link)`
  text-decortaion: none;
  margin-bottom: 16px;
  font-size: 14px;
  color: #3d3d4e;

  &:hover {
    color: #f26a2e;
    transition: 0.3s ease-out;
  }
`;

const SocialMedia = styled.section`
  max-width: 1000px;
  width: 100%;
`;
const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1100px;
  margin: 40px auto 0 auto;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;
const SocialLogo = styled(Link)`
  color: #fff;
  justify-self: start;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  font-weight: bold;
`;

const WebsiteRights = styled.small`
  color: #fff;
  margin-bottom: 16px;
`;

const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 240px;
`;

const SocialIconLink = styled.a`
  color: #fff;
  font-size: 24px;
`;

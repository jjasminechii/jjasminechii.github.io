import styled from 'styled-components';
import Container from './Container';
import Grid from './Grid';
import Link from './Link';
import Text from './Text';
import React from 'react';
import { SiGithub, SiLinkedin } from 'react-icons/si';
import { MdMail } from 'react-icons/md';

const StyledFooter = styled.footer`
  width: 100%;
  height: 100px;
  padding: 60px 20px 100px;
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: 0;
  left: 0;
`;

const FooterGrid = styled.div`
  display: flex;
  grid-template-columns: repeat(6, 1fr);
  gap: 30px;
  margin-bottom: 30px;
  margin-top: 20px;
  justify-content: center;
`;

const links = [
  {
    url: 'https://github.com/jjasminechii',
    icon: SiGithub,
    alt: 'Image of Github logo',
  },
  {
    url: 'mailto:jachi@uw.edu',
    icon: MdMail,
    alt: 'Image of Email logo',
  },
  {
    url: 'https://linkedin.com/in/jjasminechii',
    icon: SiLinkedin,
    alt: 'Image of Linkedin logo',
  },
];

const Footer = (): JSX.Element => (
  <StyledFooter>
    <Container paddingY="25px">
      <Grid gridGap="30px">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        {/* <Link href="/projects">Projects</Link> */}
        <Link href="mailto:jachi@uw.edu">Contact</Link>
      </Grid>
    </Container>
    <FooterGrid>
      {links.map(({ url, icon: Icon, alt }) => (
        <Link key={url} target="_blank" opacity={0.7} href={url}>
          <Icon size={22} aria-label={alt} role="img"/>
        </Link>
      ))}
    </FooterGrid>
    <Text margin={0} fontSize="0.9rem" color="rgba(0, 0, 0, 0.7)">
      © Jasmine Chi 2024 → {new Date().getFullYear()}
    </Text>
  </StyledFooter>
);

export default Footer;

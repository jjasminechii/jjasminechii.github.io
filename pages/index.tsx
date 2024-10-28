import React from 'react';
import Image from 'next/image';

import { Container, Title, Button, Link, Text } from '@components';
import styles from '@styles/Home.module.css';

const Home = (): JSX.Element => (
  <Container>
    <Container
      alignContent="center"
      alignItems="center"
      gridGap="4rem"
      justifyContent="center"
      paddingBottom="40px"
      paddingY="25px"
      textAlign="center"
    >
      <Container alignItems="center" alignContent="center">
        <Image
          alt="A picture of Jasmine Chi wearing glasses and a brown top, smiling. 
          She is standing outdoors near a parked car with a backdrop of trees and a street with passing cars."
          className={styles.image}
          height={120}
          objectFit="cover"
          src="/me.webp"
          width={120}
        />
        <Title>Jasmine Chi</Title>
        <Title
          as="h2"
          color="rgba(0, 0, 0, 0.6)"
          fontSize="2rem"
          fontWeight="500"
        >
          I like to build stuff with code.
        </Title>
      </Container>
      <Container maxWidth="700px" gridGap="3rem">
        <Container>
          <Text textAlign="center">
            I&apos;m a BS/MS student at the University of Washington studying computer science 
            with a double degree in English. I also like CS education...a lot :)
          </Text>
        </Container>
        <Link href="/about">
          <Button>More about me &rarr;</Button>
        </Link>
      </Container>
    </Container>
  </Container>
);

export default Home;

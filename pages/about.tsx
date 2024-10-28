import React from 'react';
import { Title, Text, Container, Grid, Link, Card } from '@components';
import { GetStaticProps } from 'next';
import Head from 'next/head';

import {
  SiTypescript,
  SiReact,
  SiPython,
  SiGraphql,
  SiJavascript,
  SiCplusplus,
  SiC,
  SiHtml5,
  SiCss3,
} from 'react-icons/si';
import { BiLogoJava } from 'react-icons/bi';
import { getPosts, Post } from '@posts';
import { TransparentLink } from '@components';

interface AboutProps {
  experiences: Post[];
}

const stacks = [
  {
    Icon: SiPython,
    url: 'https://www.python.org/',
    alt: 'A image of Python logo',
  },
  {
    Icon: BiLogoJava,
    url: 'https://www.java.com/',
    alt: 'A image of Java logo',
  },
  {
    Icon: SiTypescript,
    url: 'https://www.typescriptlang.org/',
    alt: 'A image of Typescript logo',
  },
  {
    Icon: SiJavascript,
    url: 'https://www.javascript.com/',
    alt: 'A image of Javascript logo',
  },
  {
    Icon: SiReact,
    url: 'https://reactjs.org/',
    alt: 'A image of React logo',
  },
  {
    Icon: SiGraphql,
    url: 'https://graphql.org/',
    alt: 'A image of GraphQL logo',
  },
  {
    Icon: SiCplusplus,
    url: 'https://www.cplusplus.org/',
    alt: 'A image of C++ logo',
  },
  {
    Icon: SiC,
    url: 'https://www.learn-c.org/',
    alt: 'A image of C logo',
  },
  {
    Icon: SiHtml5,
    url: 'https://www.w3.org/html/',
    alt: 'A image of HTML logo',
  },
  {
    Icon: SiCss3,
    url: 'https://www.w3.org/Style/CSS/',
    alt: 'A image of CSS logo',
  }
];

const About = ({ experiences }: AboutProps): JSX.Element => (
  <Container>
    <Head>
      <title>About</title>
    </Head>
    <Container alignContent="center" alignItems="center">
      <Title fontSize={['3rem', '4rem']} as="h2">
        Coding. Teaching. Writing.
      </Title>
      <Container maxWidth={['100%', '720px']} marginY="1rem">
        <Text>On campus at the University of Washington, I'm a lead teaching assistant 
        for the <a href="https://courses.cs.washington.edu/cse121">introductory computer science courses</a> here. 
        I mainly teach Java to students who are new to programming! I also help maintain a lot of the course 
        infrastructure and help with the course design and curriculum.
        </Text>
        <Text>This past summer, I interned as a software engineer at <a href='https://palantir.com'>Palantir</a> on
         the Cross Platform Object View team, where I learned about all things frontend. I worked extensively on 
         UI components for Foundry, including (but not limited to!) building a new graph visualization for data ingestion.
        </Text>
        <Text>
          When I'm away from my computer, I like to read new books, eat at yummy restaurants, 
          watch new shows on Netflix, and bake banana bread!
        </Text>
      </Container>
    </Container>

    <Container
      paddingY="4rem"
      gridGap="2rem"
      alignContent="center"
      alignItems="center"
      textAlign="center"
      width="100%"
    >
      <Title fontSize="40px" as="h2">
        Technologies I frequently use
      </Title>
      <Grid
        gridTemplateColumns={['repeat(2 , 1fr)', 'repeat(5 , 1fr)']}
        gridGap="1rem"
        justifyItems="center"
        maxWidth="40rem"
      >
        {stacks.map(({ Icon, url, alt }, i) => (
          <Link href={url} key={url}>
            <Card key={i}>
              <Icon size="2rem" role="img" aria-label={alt} />
            </Card>
          </Link>
        ))}
      </Grid>
    </Container>
    <Container
      alignContent="center"
      alignItems="center"
      textAlign="center"
      width="100%"
      paddingBottom="4rem"
      gridGap="3rem"
    >
      <Title fontSize="40px" as="h2">
        Work Experiences
      </Title>
      <Container width="100%">
        {experiences.map(({ data }, i) => (
          <TransparentLink href={`/about/${data.slug}`} key={data.slug}>
            <Grid
              key={i}
              gridTemplateColumns="1fr 4fr"
              justifyItems="flex-start"
              gridGap="1rem"
              paddingY="2rem"
              borderBottom="1px solid rgba(0,0,0,0.1)"
            >
              <Container width="100%">
                <Text>0{experiences.length - i}</Text>
              </Container>
              <Grid width="100%" gridTemplateColumns="4fr 1fr">
                <Container
                  width="100%"
                  alignItems="flex-start"
                  textAlign="start"
                >
                  <Grid
                    width="100%"
                    gridTemplateColumns="repeat(2, auto)"
                    justifyItems="flex-start"
                    justifyContent="flex-start"
                    gridGap="1rem"
                  >
                    <Title fontSize="1.5rem" margin={0} as="h3">
                      {data.title}
                    </Title>
                    <Text fontSize="smaller" margin={0}>
                      {data.date}
                    </Text>
                  </Grid>
                  <Text fontSize="1rem">{data.caption}</Text>
                </Container>
                <Text fontSize="1.5rem">&rarr;</Text>
              </Grid>
            </Grid>
          </TransparentLink>
        ))}
      </Container>
    </Container>
  </Container>
);

export const getStaticProps: GetStaticProps = async () => {
  const experiences = await getPosts('experiences');
  experiences.sort((a, b) =>
    b.data.date.toString().localeCompare(a.data.date.toString()),
  );

  return {
    props: {
      experiences,
    },
  };
};

export default About;

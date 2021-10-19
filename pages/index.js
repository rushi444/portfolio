import {
  Container,
  Box,
  Heading,
  Image,
  useColorModeValue,
  Link,
  Button
} from '@chakra-ui/react'
import NextLink from 'next/link'

import { Section } from 'components/Section'
import { Paragraph } from 'components/Paragraph'
import { BioSection, BioYear } from '../components/Bio'

const Home = () => {
  return (
    <Container>
      <Box
        borderRadius="lg"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        p={3}
        my={6}
        alignSelf="center"
      >
        Hey there! I&apos;m a software engineer based in the Bay Area
      </Box>
      <Box display={{ mg: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Rushi Arumalla
          </Heading>
          <p>Writing computer words...</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          align="center"
        >
          <Image
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            maxWidth="100px"
            display="inline-block"
            borderRadius="full"
            src="/images/profile.jpeg"
            alt="Profile Picture"
          />
        </Box>
      </Box>
      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>
          Becoming a developer started out with me building trading
          scripts in my free time - I didn&apos;t realize it
          would turn into my career. I love building beautiful interfaces and
          architecting applications from the ground-up. I&apos;m primarily
          focused on web development and enjoy working with
          Javascript/Typescript, React, GraphQL and Node.js. I&apos;m currently
          working at a start-up, <Link href="https://mosaic.us/">Mosaic</Link>.
        </Paragraph>
      </Section>
      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>1997</BioYear>
          Born on the planet Earth
        </BioSection>
        <BioSection>
          <BioYear>2019</BioYear>
          Enrolled in Lambda School of Computer Science and Web Development
        </BioSection>
        <BioSection>
          <BioYear>2020</BioYear>
          Worked at Northwestern Mutual as an Associate Software Engineer
        </BioSection>
        <BioSection>
          <BioYear>2021 - current</BioYear>
          Working at Mosaic as a Software Engineer
        </BioSection>
      </Section>
      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Things I love:
        </Heading>
        <Paragraph>
          <NextLink href="/spotify">
            <Link>Music</Link>
          </NextLink>
          , Gaming, Traveling,{' '}
          <Link href="http://www.github.com/rushi444">Coding</Link>, endlessly
          scrolling through TikTok, and spending time with my dog, Mochi.
        </Paragraph>
      </Section>
    </Container>
  )
}

export default Home

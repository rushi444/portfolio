import {
  Container,
  Box,
  Heading,
  Image,
  useColorModeValue,
  Link,
  List,
  ListItem,
  Button,
  Icon
} from '@chakra-ui/react'
import { IoLogoGithub, IoLogoLinkedin, IoMailOpen } from 'react-icons/io5'

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
          Becoming a developer started out with me building trading scripts in
          my free time - I didn&apos;t realize it would turn into my career. I
          love building beautiful interfaces and architecting applications from
          the ground-up. I&apos;m primarily focused on web development and enjoy
          working with Javascript/Typescript, React, GraphQL and Node.js.
          I&apos;m currently working at a start-up,{' '}
          <Link href="https://mosaic.us/">Mosaic</Link>.
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
          Music, Gaming, Traveling, Coding, endlessly scrolling through TikTok,
          and spending time with my dog, Mochi.
        </Paragraph>
      </Section>
      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Links
        </Heading>
        <List>
          <ListItem>
            <Link href="https://www.github.com/rushi444" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoGithub} />}
              >
                Github
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link
              href="https://www.linkedin.com/in/rushi-arumalla/"
              target="_blank"
            >
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoLinkedin} />}
              >
                LinkedIn
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="mailto: rushi44@gmail.com" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoMailOpen} />}
              >
                Email
              </Button>
            </Link>
          </ListItem>
        </List>
      </Section>
    </Container>
  )
}

export default Home

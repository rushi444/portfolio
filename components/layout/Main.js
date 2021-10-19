import Head from 'next/head'
import { Box, Container } from '@chakra-ui/react'

import { Navbar } from './Navbar'
import { VoxelDog } from '../VoxelDog'
import { NoSSR } from '../layout/NoSSR'

export const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Rushi - Homepage</title>
      </Head>
      <Navbar path={router.asPath} />
      <Container maxW="container.md" pt={14}>
        <NoSSR>
          <VoxelDog />
        </NoSSR>
        {children}
      </Container>
    </Box>
  )
}

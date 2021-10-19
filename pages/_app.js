import { ChakraProvider } from '@chakra-ui/react'

import { Main } from '../components/layout/Main'
import { theme } from '../lib/theme'
import { Fonts } from '../components/layout/fonts'

const MyApp = ({ Component, pageProps, router }) => {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <Main router={router}>
        <Component {...pageProps} key={router.route} />
      </Main>
    </ChakraProvider>
  )
}

export default MyApp

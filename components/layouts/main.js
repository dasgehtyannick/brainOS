import Head from 'next/head'
import dynamic from 'next/dynamic'
import NavBar from '../navbar'
import { Box, Container } from '@chakra-ui/react'
import Footer from '../footer'
import VoxelDogLoader from '../voxel-dog-loader'

const LazyVoxelDog = dynamic(() => import('../voxel-dog'), {
  ssr: false,
  loading: () => <VoxelDogLoader />
})

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Brain's homepage" />
        <meta name="author" content="Yannick" />
        <meta name="author" content="brain" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <meta name="twitter:title" content="Brain" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@brain" />
        <meta name="twitter:creator" content="@brain" />
        <meta name="twitter:image" content="https://www.lcbrain.de/card.png" />
        <meta property="og:site_name" content="Brain" />
        <meta name="og:title" content="Brain" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.lcbrain.de/card.png" />
        <title>Brain 🧠</title>
      </Head>

      <NavBar path={router.asPath} />

      <Container maxW="container.md" pt={14}>
        <LazyVoxelDog />

        {children}

        <Footer />
      </Container>
    </Box>
  )
}

export default Main

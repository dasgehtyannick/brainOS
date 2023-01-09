import NextLink from 'next/link'
import {
  Box,
  Heading,
  Text,
  Container,
  Divider,
  Button
} from '@chakra-ui/react'

const NotFound = () => {
  return (
    <Container>
      <Heading as="h1">Hier ist nix.</Heading>
      <Text>Das hat ja mal nicht geklappt, wa?</Text>
      <Divider my={6} />
      <Box my={6} align="center">
        <NextLink href="/" passHref>
          <Button colorScheme="teal">Zurück zum Start</Button>
        </NextLink>
      </Box>
    </Container>
  )
}

export default NotFound

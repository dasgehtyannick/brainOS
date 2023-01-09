import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  SimpleGrid,
  Button,
  List,
  ListItem,
  useColorModeValue,
  chakra
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'
import { IoLogoTwitter, IoLogoInstagram, IoLogoTwitch, IoLogoYoutube } from 'react-icons/io5'
import thumbYouTube from '../public/images/links/youtube.png'
import thumbInkdrop from '../public/images/links/vodkanal.png'
import Image from 'next/image'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        Moin moin Leute, ich bin LittleConfusedBrain <br/>oder einfach nur Yannick.
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Yannick
          </Heading>
          <p>Macher (Content Creator / Designer / Developer )</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <ProfileImage
              src="/images/geyannickt.jpg"
              alt="Profile image"
              borderRadius="full"
              width="100%"
              height="100%"
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          hej!
        </Heading>
        <Paragraph>
          Als kleiner Bub mit 14 Jahren hat mir mein Kumpel YouTube gezeigt und
          in dem Atemzug auch die Welt der Lets Plays. Natürlich war ich von
          Sekunde 1 in den Bann gezogen, weil viel Quatsch erzählen und Spiele
          spielen kann ich auch - dachte ich. Nun sind 13 Jahre später und ich
          mach den ganzen Kram immer noch und hab mehr Spaß denn je! :^)
          
          Mittlerweile hat mein YouTube-Kanal {' '}
          <NextLink href="https://www.youtube.com/littleconfusedbrain" passHref>
            <Link target="_blank">LittleConfusedBrain</Link>
          </NextLink>
          {' '}mehr als 45.000 Abonnenten und ich versuche mich auch live auf {' '}
          <NextLink href="https://www.twitch.tv/brain" passHref>
            <Link target="_blank">Twitch</Link>
          </NextLink>.
        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="https://lcbrain.de/projects" passHref scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              Alle meine Lets Plays in der Übersicht
            </Button>
          </NextLink>
        </Box>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          im www unter:
        </Heading>
        <List>
          <ListItem>
            <Link href="https://twitch.tv/brain" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoTwitch />}
              >
                @brain (Livestreams)
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://youtube.com/littleconfusedbrain" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoYoutube />}
              >
                @LittleConfusedBrain (Lets Plays)
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://twitter.com/lcbrain" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoTwitter />}
              >
                @LCBrain
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://instagram.com/yannick.jpg" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoInstagram />}
              >
                @yannick.jpg
              </Button>
            </Link>
          </ListItem>
        </List>

        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            href="https://www.youtube.com/littleconfusedbrain"
            title="LittleConfusedBrain"
            thumbnail={thumbYouTube}
          >
            Mein YouTube-Kanal (&gt;45k subs)
          </GridItem>
          <GridItem
            href="https://www.inkdrop.app/"
            title="VOD Kanal"
            thumbnail={thumbInkdrop}
          >
            Livestream Aufzeichnungen
          </GridItem>
        </SimpleGrid>
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'

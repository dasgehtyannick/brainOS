import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  AspectRatio
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Hades">
    <Container>
      <Title>
        Hades <Badge>2020</Badge>
      </Title>
      <P>
        Hades ist ein Roguelike, welches die Geschichte von Zagreus (Sohn von Hades) erzählt.
      </P>
      <P>
      <br/>HADES verbindet einen wunderschönen Artstyle mit grandiosem Soundtrack und setzt die Kirsche durch eine unfassbare Storytiefe auf. Man startet sehr schwach und wird nach und nach perfekt in diesem Roguelike vorangeführt und man spürt grade zu, wie man immer weiterkommt. Nach genau 24h Spielzeit habe ich die Credits erreicht und habe jetzt noch enorm viel After Content, welcher mich erwartet und viele offene Fragen beantworten wird.
      <br/><br/>Ich würde dieses Spiel definitiv weiterempfehlen!
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Steam</Meta>
          <Link href="https://store.steampowered.com/app/1145360/Hades/">
          Hades <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Preis</Meta>
          <span>20,99€</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/hades_01.png" alt="Hades Screenshot 01" />
      <WorkImage src="/images/works/hades_02.png" alt="Hades Screenshot 01" />
      <AspectRatio maxW="640px" ratio={1.7} my={4}>
        <iframe
          src="https://www.youtube.com/embed/OFNax2ADnpI"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </AspectRatio>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'

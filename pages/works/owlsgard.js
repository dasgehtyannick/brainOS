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
  <Layout title="Owlsgard">
    <Container>
      <Title>
        Owlsgard <Badge>2022-2023</Badge>
      </Title>
      <P>
        Das Point-&-Click Spielchen Beyond the Edge of Owlsgard kam am 23.12.2022 heraus.
      </P>
      <P>
      <br/>Ich war ein Backer auf Kickstarter nachdem ich die Demo gespielt hatte. Also quasi Supporter erster Stunde.
      Das Spiel überzeugt auf so vielen Ebenen und als Point-&-Click Spieler fühlt man sich direkt Zuhause. Die Charaktere und Geschichte ist mit so viel Liebe und Witz geschrieben, dass ich mich über jeden Satz freue, den ich höre. Die wundervolle Synchronisation kommt nämlich auch noch oben drauf!
      <br/><br/>
      Alles in allem bin ich unfassbar glücklich über das Spiel und habe bisher enorm viel Spaß. Ich würde es wirklich JEDEM empfehlen. 🎉
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Steam</Meta>
          <Link href="https://store.steampowered.com/app/1709730/Beyond_The_Edge_Of_Owlsgard/">
          Beyond the Edge of Owlsgard <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>GOG</Meta>
          <Link href="https://www.gog.com/game/beyond_the_edge_of_owlsgard">
          Beyond The Edge Of Owlsgard <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Preis</Meta>
          <span>24,50€</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/owlsgard_01.png" alt="Owlsgard Screenshot 01" />
      <WorkImage src="/images/works/owlsgard_02.png" alt="Owlsgard Screenshot 01" />
      <AspectRatio maxW="640px" ratio={1.7} my={4}>
        <iframe
          src="https://www.youtube.com/embed/7oaTefQx4sI"
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

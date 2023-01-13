import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbOwlsgard from '../public/images/works/owlsgard.png'
import thumbHades from '../public/images/works/hades.png'

const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Brabbeleien
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
      <Section>
          <WorkGridItem id="hades" title="Hades" thumbnail={thumbHades}>
            HADES ist ein Rougelike, welches im Jahr 2020 erschien, mich aber
            jetzt erst vollständig in seinen Bann gezogen hat.
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem id="owlsgard" title="Owlsgard" thumbnail={thumbOwlsgard}>
            Beyond the Edge of Owlsgard - ein Point-&-Click Spiel, welches im Jahr
            2022 erschien und den Charme von Spielen aus den 90ern aufgreift!
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'

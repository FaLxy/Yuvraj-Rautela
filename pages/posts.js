import { Box, Container, Heading, SimpleGrid } from "@chakra-ui/react"
import Layout from "../components/layouts/article"
import Section from "../components/section"
import { GridItem } from "../components/grid-item" 
import thumbSound from '../public/images/Work/SoundCloud.png'


const Posts = () => (
    <Layout title="Posts">
        <Container maxW="container.md" pt={14} style = {{backdropFilter:'blur(5px'}}>
            <Heading as="h3" fontSize={20} mb={3}>
                Popular Posts
            </Heading>
            <Section delay={0.1}>
                <SimpleGrid columns={[1,1,1]} gap={6}>
                    <GridItem title="My SoundCloud" thumbnail={thumbSound} href="https://soundcloud.com/yuvraj-rautela-575625794" width="100%">

                    </GridItem>
                </SimpleGrid>
            </Section>
        </Container>
    </Layout>
)

export default Posts
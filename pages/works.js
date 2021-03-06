import { Container, Heading, SimpleGrid} from "@chakra-ui/react";
import Section from "../components/section";
import { WorkGridItem } from "../components/grid-item";
import Layout from "../components/layouts/article";

import thumbDrishti from '../public/images/Work/drishti.png';
import thumbPong from '../public/images/Work/Pong.png';
import thumbZomato from '../public/images/Work/Zomato.png';
import thumbMicro from '../public/images/Work/MicroClone.png';
const Works = () => (
        <Layout>
        <Container maxW="container.md" style = {{backdropFilter:'blur(5px'}}>
            <Heading as="h3" fontSize={20} mb={4}>
                Works
            </Heading>
            <SimpleGrid columns={[1,1,2]} gap={6}>
                <Section>
                    <WorkGridItem id ="Drishti" title="Drishti" thumbnail={thumbDrishti}>
                    Drishti is a Video-Calling Web App, specifically designed to cater the needs of the differently abled.  
                    </WorkGridItem>
                </Section>
                <Section>
                    <WorkGridItem id="Pong" title="Pong" thumbnail={thumbPong}>
                    A simple game made using JavaScript, where the user plays against a bot.
                    </WorkGridItem>
                </Section>
                <Section>
                    <WorkGridItem id="Zomato" title="Zomato" thumbnail={thumbZomato}>
                    A simple Zomato Clone, to order your favourite food.
                    </WorkGridItem>
                </Section>
                <Section>
                    <WorkGridItem id="Microsoft" title="Microsoft" thumbnail={thumbMicro}>
                    A responsive Microsoft Homepage made using TailWind CSS.
                    </WorkGridItem>
                </Section>
            </SimpleGrid>
        </Container>
        </Layout>
    )


export default Works

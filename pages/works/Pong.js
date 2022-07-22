import { Container, Badge, Link, List, ListItem} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta, Span } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
    return (
        <Layout title="Pong">
            <Container maxW="container.md" style = {{backdropFilter:'blur(5px'}}>
                <Title>
                    PONG &nbsp;<Badge>2022</Badge>
                </Title>
                <P>
                Simple Pong game to play if you are bored. Try to beat the AI. The difficulty increases with time. Further the player progresses, 
                the AI opponents reacts faster and the pong%apos;s velocity increases. Added custom sounds to denote hit registry.
                </P>
            <List ml={4} my={4}>
                <ListItem>
                    <Meta>Source</Meta>
                    <Link href="https://github.com/FaLxy/Simple-Pong" target="_blank">
                        Pong Git Repo
                        <ExternalLinkIcon mx="2px" />
                    </Link>
                </ListItem> 
                <ListItem>
                    <Meta>Platform</Meta>
                    <Span>A Web App</Span>
                </ListItem> 
                <ListItem>
                    <Meta>TechStack</Meta>
                    <Span>HTML, CSS, JavaScript</Span>
                </ListItem>     
            </List> 

            <WorkImage  src ="/images/Work/Pong.png" />
            <WorkImage  src ="/images/Work/Pong2.png" />
            <WorkImage  src ="/images/Work/Pong3.jpg" />
            </Container>
        </Layout>
    )
}

export default Work
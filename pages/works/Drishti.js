import { Container, Badge, Link, List, ListItem} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta, Span } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
    return (
        <Layout title="Drishti">
            <Container maxW="container.md" style = {{backdropFilter:'blur(5px'}}>
                <Title>
                    Drishti &nbsp;<Badge>2022</Badge>
                </Title>
                <P>
                A Video-Calling Web App, specifically designed to cater the needs of the Visually Challenged.
                It implements technologies like, facial recognition, feature detection, for better communication of emotions.
                The Visually Challenged User is updated, by use of various sounds, coupled with facial feature and emotion recognition of the other person
                on the call, what might the person&apos;s emotions be while on a video call. This app is currently under developement
                </P>
            <List ml={4} my={4}>
                <ListItem>
                    <Meta>Source</Meta>
                    <Link href="https://github.com/FaLxy/Dristhi-Video-App" target="_blank">
                        Drishti Git Repo
                        <ExternalLinkIcon mx="2px" />
                    </Link>
                </ListItem> 
                <ListItem>
                    <Meta>Platform</Meta>
                    <Span>Currently being implemented as a Web App. Soon will be ported to Andriod.</Span>
                </ListItem> 
                <ListItem>
                    <Meta>TechStack</Meta>
                    <Span>React, ChakraUI, WebRTC, Socket.io, FaceAPI.js, Node.js</Span>
                </ListItem>     
            </List> 

            <WorkImage  src ="/images/Work/Drishti1.jpg" />
            <WorkImage  src ="/images/Work/drishti.png" />
            </Container>
        </Layout>
    )
}

export default Work
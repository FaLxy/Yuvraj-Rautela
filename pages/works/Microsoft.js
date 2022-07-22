import { Container, Badge, Link, List, ListItem} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta, Span } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
    return (
        <Layout title="Microsoft Clone">
            <Container maxW="container.md" style = {{backdropFilter:'blur(5px'}}>
                <Title>
                    MICROSOFT CLONE &nbsp;<Badge>2022</Badge>
                </Title>
                <P>
                A pretty simple clone of Microsoft Homepage made using TailWindCSS.
                </P>
            <List ml={4} my={4}>
                <ListItem>
                    <Meta>Source</Meta>
                    <Link href="https://github.com/FaLxy/Microsoft-Clone" target="_blank">
                        Microsoft Clone Git Repo
                        <ExternalLinkIcon mx="2px" />
                    </Link>
                </ListItem>  
                <ListItem>
                    <Meta>TechStack</Meta>
                    <Span>HTML, CSS, TailWindCSS</Span>
                </ListItem>     
            </List> 

            <WorkImage  src ="/images/Work/MicroClone.png" />
            <WorkImage  src ="/images/Work/MicroClone2.png" />
            </Container>
        </Layout>
    )
}

export default Work
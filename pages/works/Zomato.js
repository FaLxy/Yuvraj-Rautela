import { Container, Badge, Link, List, ListItem} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta, Span } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
    return (
        <Layout title="Zomato Clone">
            <Container maxW="container.md" style = {{backdropFilter:'blur(5px'}}>
                <Title>
                   Zomato Clone &nbsp;<Badge>2020</Badge>
                </Title>
                <P>
                Zomato clone made with React JS, JavaScript and HTML5. The user can browse through a vast catalogue of dishes, restraunts and motels.
                </P>
            <List ml={4} my={4}>
                <ListItem>
                    <Meta>Source</Meta>
                    <Link href="https://github.com/FaLxy/Zomato-Clone" target="_blank">
                        Zomato Clone Git Repo
                        <ExternalLinkIcon mx="2px" />
                    </Link>
                </ListItem>  
                <ListItem>
                    <Meta>TechStack</Meta>
                    <Span>ReactJS, JavaScript, CSS, HTML5</Span>
                </ListItem>     
            </List> 

            <WorkImage  src ="/images/Work/Zomato.png" />
            <WorkImage  src ="/images/Work/Zomato2.png" />
            <WorkImage  src ="/images/Work/Zomato3.png" />
            </Container>
        </Layout>
    )
}

export default Work
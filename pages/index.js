import NextLink from'next/link'
import {Link, 
    Container, 
    Box, 
    Heading,
    Image,
    useColorModeValue,
    Button
    } from '@chakra-ui/react'
import Section from '../components/section'
import Paragraph from'../components/paragraph'
import styled from '@emotion/styled'
import { ChevronRightIcon } from '@chakra-ui/icons'
import {BioSection, BioYear} from '../components/bio'
import Layout from '../components/layouts/article'

const BlackWhiteImg = styled.span`
img{
    transition: all .2s ease-in-out;
}
&:hover img{
    transform: scale(3) rotate(5deg);
}
&:c`
//#1b252a
const Page = () => {
    return(
        <Layout>
        <Container maxW='container.md' p={2} style = {{backdropFilter:'blur(5px'}}>
          <Box borderRadius="lg" bg={useColorModeValue('whiteAlpha.500','whiteAlpha.200')} p={3} mb ={6} align="center">
          नमस्ते, I&apos;m a Web Developer and Music Producer from Dehradun!
            </Box>  

            <Box display = {{md:'flex'}}>
            <Box flexGrow={1}>
                <Heading as='h2' variant ="page-title">
                    Yuvraj Rautela
                </Heading>
            <Paragraph style={{textIndent:'0'}}>Creative and Inquisitive ( Developer / Designer / Sound Engineer / Composer )</Paragraph>
            </Box>
            <Box flexShrink={0} mt={{base: 4, md: 0}} ml={{md: 6}} align="center">
                <BlackWhiteImg>
                    <Section delay={0.1}>                        
                        <Image borderColor="whiteAlpha.800" borderWidth = {1} borderStyle="Solid" maxWidth="100px" display="inline-block" borderRadius="full" src="/images/Me_Color.png" alt="Profile Image" />
                    </Section>
                </BlackWhiteImg>
            </Box>
            </Box>

        <Section delay={0.1}>
            <Heading as="h3" size='md' variant='section-title'>
                Work
            </Heading>
            <Paragraph>Yuvraj Rautela is a Freelance Web Developer and a Music Producer based in Dehradun.
                He is very passionate and disciplined about his work. He loves to share and talk about his creations and 
                solve real-life problems. When not working, he tries to give back to the community by making tutorials on Music and 
                Web developement on his Instagram profile. Currently, he is working on a building a Web App called {' '}
                <NextLink href="/works/Drishti"><Link>Drishti</Link></NextLink>.
                He publishes Music on his YouTube and SoundCloud Channel called "FaLx".
                He likes to spend his leisure time with his Cats and in the Gym.
            </Paragraph>
            <Box align="center" my={4}>
                <NextLink href="/works">
                    <Button rightIcon={<ChevronRightIcon />} colorScheme="yellow">
                        My Portfolio
                    </Button>
                </NextLink>
            </Box>    
                
        </Section>
        <Section delay={0.2}>
            <Heading as="h3" variant="section-title">
                Bio
            </Heading>
            <BioSection>
                <BioYear>
                    2002
                </BioYear>
                Born in Dehradun, India.
            </BioSection>
            <BioSection>
                <BioYear>
                    2017
                </BioYear>
                Completed Class X from Carman Residential &amp; Day School (Indian Certificate of Secondary Education)
            </BioSection>
            <BioSection>
                <BioYear>
                    2017
                </BioYear>
                First Prize in Uttarakhand State Region. Qualified for KVS National Science Quiz.
            </BioSection>
            <BioSection>
                <BioYear>
                    2019
                </BioYear>
                Completed Class XII from Kendriya Vidyalaya FRI (Central Board of Secondary Education)
            </BioSection>
            <BioSection>
                <BioYear>
                    2020
                </BioYear>
                Qualified Joint Entrance Examination Mains (JEE Mains) with an All India Rank of 6217.
            </BioSection>
            <BioSection>
                <BioYear>
                    2020
                </BioYear>
                Qualified Joint Entrance Examination Advanced (JEE Advanced).
            </BioSection>
            <BioSection>
                <BioYear>
                    2024 (Expected)
                </BioYear>
                Bachelor&apos;s Degree in Information Technology from National Institute of Technology, Kurukshetra.
            </BioSection>
            
        </Section>
        <Section delay={0.4}>
            <Heading as="h3" variant="section-title">
                My Hobbies❤️
            </Heading>
            <Paragraph>
                PC Building, {''}
                <Link href="https://www.pinterest.com/yuvrajrautela2002/_created" target={"_blank"}>Photography</Link>
                , Debating, DJing, 
                <Link href="https://www.youtube.com/watch?v=LfHUUpk4o4E" target={"_blank"}> Rapping</Link>, Cooking, Video Gaming.
            </Paragraph>
        </Section>
        </Container>
        </Layout>
    )
}

export default Page
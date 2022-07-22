import NextLink from 'next/link'
import{
    Box,
    Heading,
    Container,
    Divider,
    Button,
    Text,
} from '@chakra-ui/react'

const NotFound = () => {
    return (
        <Container>
            <Heading as = "h1">
                Not Found
            </Heading>
            <Text>
                The Page You&apos;re looking for was not found.😿
            </Text>
            <Divider my ={6} />

            <Box my={6} align = "center">
                <NextLink href="/">
                    <Button colorScheme="yellow">Return to Home Page</Button>
                </NextLink>
            </Box>
        </Container>
    )
}

export default NotFound
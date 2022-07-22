import Link from 'next/link'
import Image from "next/image"
import { Text, useColorModeValue} from '@chakra-ui/react'
import styled from '@emotion/styled'

const LogoBox = styled.span`
font-weight: BeforeUnloadEvent;
font-size: 18px;
display: inline-flex;
align-items: center;
height: 30px;
line-height: 20px;
padding: 10px;
padding-top: 21px;
img{
    transition: all 0.2s ease-in-out;
}
&:hover img{
    transform: rotate(20deg) scale(1.1); 
}

`

const Logo = () => {
    const footPrintImg = `/images/black_cat${useColorModeValue('','-dark')}.png`

    return (
        <Link href="/">
            <a>
                <LogoBox>
                    <Image src = {footPrintImg} width={30} height={25} alt="logo"/>
                    <Text
                        color = {useColorModeValue('gray.800','whiteAlpha.900')}
                        fontFamily='Titillium Web'
                        fontWeight="bold"
                        ml={3}>
                            Yuvraj Rautela</Text> 
                </LogoBox>
            </a>
        </Link>
    )
}

export default Logo

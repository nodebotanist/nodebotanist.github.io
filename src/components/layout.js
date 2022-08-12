import * as React from 'react'
import {
    Container,
    Heading,
} from '@chakra-ui/react'
import Nav from './nav'
const Layout = ({pageTitle, children}) => {
    return (
        <>
            <Nav />
            <Container maxW='960px'>
                <Heading as='h1'>{pageTitle}</Heading>
                {children}
            </Container>
        </>
    )
}

export default Layout
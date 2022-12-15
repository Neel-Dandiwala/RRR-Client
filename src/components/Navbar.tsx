import {
    Box,
    Button,
    ButtonGroup,
    Container,
    Flex,
    HStack,
    IconButton,
    useBreakpointValue,
    useColorModeValue,
    Spacer,
} from '@chakra-ui/react'
import { WarningIcon, HamburgerIcon } from '@chakra-ui/icons'
import * as React from 'react'
// import { Logo } from './Logo'

export const Navbar = () => {
    const isDesktop = useBreakpointValue({ base: false, lg: true })
    return (
        <Box position="absolute" as="section" pb={{ base: '12', md: '24' }}>
            <Box as="nav" bg="bg-surface" boxShadow={useColorModeValue('sm', 'sm-dark')}>
                <Container py={{ base: '4', lg: '5' }}>
                    <HStack spacing="10" justify="space-between">
                        <WarningIcon position="relative" pl="1" w={8} h={8} color="red.500" />
                        {isDesktop ? (
                            <Flex justify="space-between" flex="1">
                                <ButtonGroup position="relative" py={{ base:'2' }} variant="link" spacing="8" pl="5" left="0">
                                    {['Product', 'Pricing', 'Resources', 'Support'].map((item) => (
                                        <Button key={item}>{item}</Button>
                                    ))}
                                </ButtonGroup>
                                <Spacer />
                                <HStack position="relative" left="55vw" gap='2' spacing="3">
                                    <Button variant="ghost">Sign in</Button>
                                    <Button variant="ghost">Sign up</Button>
                                </HStack>
                            </Flex>
                        ) : (
                            <IconButton
                                variant="ghost"
                                icon={<HamburgerIcon />}
                                aria-label="Open Menu"
                            />
                            
                        )}
                    </HStack>
                </Container>
            </Box>
        </Box>
        
    )
}
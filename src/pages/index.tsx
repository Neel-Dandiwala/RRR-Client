import {
  Link as ChakraLink,
  Text,
  Code,
  List,
  ListIcon,
  ListItem,
} from '@chakra-ui/react'
import { CheckCircleIcon, LinkIcon } from '@chakra-ui/icons'
import {
  Box,
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  VStack
} from "@chakra-ui/react";
import { Hero } from '../components/Hero'
import { Container } from '../components/Container'
import { Main } from '../components/Main'
import { DarkModeSwitch } from '../components/DarkModeSwitch'
import { CTA } from '../components/CTA'
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer'
import SignUpUser from '../components/SignUpUser'
import { Tree } from '../components/Tree'
import { ContentContainer, FormikContainer, TreeContainer } from "../styles/Styled-Container"



const Index = () => (
  <Container height="100vh" width="100vw" overflow="hidden">
    <Box left="0" top="0" position="absolute" width="100vw" height="10vh" overflow="hidden"> 
      <Navbar />
    </Box>
    <Box transform="translate(-50%, -50%)" top="50%" left="12.5%" position="absolute" >
        <SignUpUser />
    </Box>
    <ContentContainer>
      <Hero />
    <Main>
      <Text color="text">
        Example repository of <Code>Next.js</Code> + <Code>chakra-ui</Code> +{' '}
        <Code>TypeScript</Code>.
      </Text>
      {/* <TreeContainer>
        <Tree />
      </TreeContainer> */}
      <List spacing={3} my={0} color="text">
        <ListItem>
          <ListIcon as={CheckCircleIcon} color="green.500" />
          <ChakraLink
            isExternal
            href="https://chakra-ui.com"
            flexGrow={1}
            mr={2}
          >
            Chakra UI <LinkIcon />
          </ChakraLink>
        </ListItem>
        <ListItem>
          <ListIcon as={CheckCircleIcon} color="green.500" />
          <ChakraLink isExternal href="https://nextjs.org" flexGrow={1} mr={2}>
            Next.js <LinkIcon />
          </ChakraLink>
        </ListItem>
      </List>
    </Main>
    </ContentContainer>

    <DarkModeSwitch />
    <Footer>
      <Text>Next ❤️ Chakra</Text>
    </Footer>
    <CTA />
  </Container>
)

export default Index

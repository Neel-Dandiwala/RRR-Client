import {
  Box,
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  VStack,
  StackDivider
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
import { Features } from '../components/Features';



const Index = () => (
  <Container height="auto" width="100vw" overflowX="hidden">
    <VStack
      
      spacing={0}
      align='stretch'
    >
      <Box width="100%" > 
        <Navbar />
      </Box>
      <Box width="100%" > 
        <Hero />
      </Box>
      <Box width="100%" > 
        <Features />
      </Box>
      <Box width="100%" > 
        <Footer />
      </Box>

    </VStack>
    {/* <Box position="absolute" bottom="0" left="0">
      <DarkModeSwitch />
    </Box> */}
    
  </Container>
)

export default Index

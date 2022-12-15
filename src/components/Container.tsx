import { Flex, FlexProps } from '@chakra-ui/react'

export const Container = (props: FlexProps) => (
  <Flex
    direction="column"
    alignItems="center"
    justifyContent="flex-start"
    bg="gray.50"
    color="black"
    _dark={{
      bg: '#2b2d42',
      color: 'white',
    }}
    transition="all 0.15s ease-out"
    {...props}
  />
)

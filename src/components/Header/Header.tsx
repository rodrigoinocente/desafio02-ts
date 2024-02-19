import { 
  Center,
  ChakraProvider,
  Input,
  Box,
  Button,
  Heading
} from '@chakra-ui/react'

export const Header  = () => {
  return(
    <Box minHeight='15vh' backgroundColor='#380B61' padding='25px'>
    <Center>
      <Heading fontSize="2rem" color="white">
        <h1>Dio Bank</h1>
      </Heading>
    </Center>
  </Box>
  )
}
import { Center, Input, Box, Button } from '@chakra-ui/react'
import { loginButtonClick } from '../services/login'
import { useState } from 'react'

export const Card = () => {

const [inputValue, setInputValue] = useState('');

  return (
    <Box minHeight='100vh' backgroundColor='#9413dc' padding='25px'>
      <Center>
        <Box backgroundColor='#FFFFFF' borderRadius='25px' padding='15px' width='400px'>
          <Center>
            <h1>Faça o login</h1>
          </Center>
          <Input placeholder="usuário" type="text" value={inputValue} onChange={(event) => setInputValue(event.target.value)} marginBottom="10px" />
          <Input placeholder="senha" type='password' marginBottom="10px" />
          <Button onClick={() => loginButtonClick(inputValue)} colorScheme='teal' size='sm' width='100%' marginTop='5px'>
            Entrar
          </Button>
        </Box>
      </Center>
    </Box>
  )
}
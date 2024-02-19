import { Center, Input, Box, Button } from '@chakra-ui/react'
import { useInput } from '../services/login'

interface ICard {
  inputValue: string
  loginChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  loginButtonClick: () => void
}

export const Card = ({}: ICard) => {

const { inputValue, loginChange, loginButtonClick } = useInput();
  
  return (

    <Box minHeight='100vh' backgroundColor='#9413dc' padding='25px'>
      <Center>
        <Box backgroundColor='#FFFFFF' borderRadius='25px' padding='15px' width='400px'>
          <Center>
            <h1>Faça o login</h1>
          </Center>
          <Input placeholder="usuário" type="text" value={inputValue} onChange={loginChange} marginBottom="10px" />
          <Input placeholder="senha" type='password' marginBottom="10px" />
          <Button onClick={loginButtonClick} colorScheme='teal' size='sm' width='100%' marginTop='5px'>
            Entrar
          </Button>
        </Box>
      </Center>
    </Box>
  );
};
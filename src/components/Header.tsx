import { Box, Button, Center, Flex, Heading, Spacer, Text } from '@chakra-ui/react'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { changeLocalStorage } from '../services/storage'
import { AppContext } from './AppContext'

export const Header = () => {
  const { isLoggedIn, setIsLoggedIn } = useContext(AppContext)
  const navigate = useNavigate()

  const logout = () => {
    changeLocalStorage({ login: false })
    setIsLoggedIn(false)
    navigate('/')
  }

  return (
    <Flex minHeight='15vh' backgroundColor='#380B61' padding='25px' borderRadius={15}>
        <Box>
          <Heading  color="white">
            Dio Bank
          </Heading>
        </Box>
      {
        isLoggedIn && (
          <>
            <Spacer />
            <Button onClick={() => logout()}>
              Sair
            </Button>
          </>
        )
      }
    </Flex>
  )
}
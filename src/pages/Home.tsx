import { AppContext } from "../components/AppContext"
import { useNavigate } from "react-router-dom"
import { changeLocalStorage } from "../services/storage"
import { Box, Button, Center, Input } from "@chakra-ui/react"
import { Card } from "../components/Card"
import { useContext, useState } from "react"
import { login } from "../services/login"

const Home = () => {
    const [email, setEmail] = useState<string>('')
    const { setIsLoggedIn } = useContext(AppContext)
    const navigate = useNavigate()

    const validateUser = async (email: string) => {
        const loggedIn = await login(email)

        if (!loggedIn) {
            return alert('Email Inválido')
        }

        setIsLoggedIn(true)
        changeLocalStorage({ login: true })
        navigate('/conta/1')
    }
    return (
        <Box padding="25px">
            <Card>
                <Center fontSize='xl' fontWeight='bold'>
                    <h1>Faça o login</h1>
                </Center>
                <Center>
                <Input placeholder="email" value={email} onChange={(event) => setEmail(event.target.value)} marginBottom='10px' width='50vw' />
                </Center>
                <Center>
                <Input placeholder="password" marginBottom="10px" width='50vw'/>
                </Center>
                <Center>
                    <Button onClick={() => validateUser(email)} colorScheme='teal' size='sm' width='40vw' marginTop='5px'>
                        Entrar
                    </Button>
                </Center>
            </Card>
        </Box>
    )
}

export default Home
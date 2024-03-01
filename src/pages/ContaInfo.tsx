import { Center, Spinner, Text } from "@chakra-ui/react"
import { useContext, useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import { AppContext } from "../components/AppContext"
import { api } from "../services/api"
import { Card } from "../components/Card"

const ContaInfo = () => {
    interface UserData {
        email: string
        password: string
        name: string
        balance: number
        id: string
    }

    const [userData, setUserData] = useState<null | UserData>()
    const navigate = useNavigate()

    const { isLoggedIn } = useContext(AppContext)

    !isLoggedIn && navigate('/')

    useEffect(() => {
        const getData = async () => {
            const data: any | UserData = await api
            setUserData(data)
        }
        getData()
    }, [])

    return (
<>
{
    userData === undefined || userData === null ?
        (
            <Center>
                <Spinner size='xl' color='white' />
            </Center>
        ) :
        (
            <>
                <Card >
                Nome: {userData.name}
                </Card>
                <Card >
                Email: {userData.email}
                </Card>
                <Card >
                ID: {userData.id}
                </Card>
                <Card >
                Saldo: {userData.balance}
                </Card>
                <Link to='/conta/1'>
                <Text fontSize='xl' color='white'>
                    Voltar
                </Text>
            </Link>
                
            </>
        )
}
</>
    )
}

export default ContaInfo

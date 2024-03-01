import { useContext, useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import { AppContext } from "../components/AppContext"
import { api } from "../services/api"
import { Center, SimpleGrid, Spinner, Text } from "@chakra-ui/react"
import CardInfo from "../components/CardInfo"

export interface UserData {
    email: string
    password: string
    name: string
    balance: number
    id: string
}

const Conta = () => {
    const [userData, setUserData] = useState<null | UserData>()
    const { id } = useParams()
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
    const actualData = new Date()

    if (userData && id !== userData.id) {
        navigate('/')
    }

    return (
        <Center>
            <SimpleGrid columns={2} spacing={8} paddingTop={16}>
                {
                    userData === undefined || userData === null ?
                        (
                            <Center>
                                <Spinner size='xl' color='white' />
                            </Center>
                        ) :
                        (
                            <>
                                <CardInfo mainContent={`Boas vindas, ${userData?.name}`} content={`${actualData.getDay()} / ${actualData.getMonth()} / ${actualData.getFullYear()} ${actualData.getHours()}:${actualData.getMinutes()}`} />
                                <CardInfo mainContent='Saldo' content={`R$ ${userData.balance}`} />
                                
                                <Link to='/infoconta'>
                                    <Text fontSize='sm' color='white'>
                                        Detalhes da conta
                                    </Text>
                                </Link>
                            </>
                        )
                }
            </SimpleGrid>

        </Center>
    )
}

export default Conta
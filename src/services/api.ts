const conta = {
    email: 'rodrigo@dio.bank',
    password: 123456,
    name: 'Rodrigo Inocente',
    balance: 500.00,
    id: '1'
}

export const api = new Promise((resolve) => {
    setTimeout(() => {
        resolve(conta)
    }, 3000)
})
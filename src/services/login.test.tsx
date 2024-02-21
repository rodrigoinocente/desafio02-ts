import { loginButtonClick } from "./login"

describe ('login', () => {

    const mockAlert = jest.fn()
    window.alert = mockAlert

    it('Deve exibir um alert de boas vindas', () => {
        loginButtonClick('Bartolomeu')
        expect(mockAlert).toHaveBeenCalledWith('Boas Vindas, Bartolomeu!')
    })
})
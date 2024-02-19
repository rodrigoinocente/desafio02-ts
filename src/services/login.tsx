import { useState } from "react"

export function useInput(initialValue = '') {

  const [inputValue, setInputValue] = useState(initialValue)

  const loginChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value)
  }

  const loginButtonClick = () => {
    alert(`Boas Vindas, ${inputValue}!`)
  }

  return {
    inputValue,
    loginChange,
    loginButtonClick
  };
}

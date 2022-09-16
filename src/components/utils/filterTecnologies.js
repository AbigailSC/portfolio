import { useState } from "react"

export const filterTecnologiesFunc = (firstValue, secondValue) => {
  const [tecnologies, setTecnologies] = useState()
  for (let i = 0; i < firstValue.length; i++) {
    for (let j = 0; j < secondValue.length - 1; j++) {
      if (firstValue[i] === secondValue[j]) {
        setTecnologies(firstValue[i])
      }
    }
  }
  return tecnologies
}
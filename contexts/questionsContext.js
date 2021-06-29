import { createContext, useEffect, useState } from 'react'

export const QuestionsContext = createContext()

export function QuestionsProvider({ children }) {

  const [step1, setStep1] = useState()
  const [step2, setStep2] = useState()
  const [step3, setStep3] = useState()
  const [step4, setStep4] = useState()

  function setQuestion(step, data) {
    switch (step) {
      case 1:
        setStep1(data)
        break;
      case 2:
        setStep2(data)
        break;
      case 3:
        setStep3(data)
        break;
      case 4:
        setStep4(data)
        break;
    
      default:
        break;
    }
  }

  async function complete() {
    const data = {
      step1,
      step2,
      step3,
      step4,
    }

    console.log(`step1 => ${step1}`)
    console.log(`step2 => ${step2}`)
    console.log(`step3 => ${step3}`)
    console.log(`step4 => ${step4}`)
    console.log(data)
  }

  return (
    <QuestionsContext.Provider
      value={{
        setQuestion,
        complete
      }}
    >
      {children}
    </QuestionsContext.Provider>
  )
}
import { createContext, useState } from 'react'

export const QuestionsContext = createContext();

import firebase from '../firebase'

export function QuestionsProvider({ children }) {

  const [step0, setStep0] = useState()
  const [step1, setStep1] = useState()
  const [step2, setStep2] = useState()
  const [step3, setStep3] = useState()
  const [step4, setStep4] = useState()

  function setQuestion(step, data) {
    switch (step) {
      case 1:
        setStep0(data)
        console.log(data, step0)
        break;
      case 2:
        setStep1(data)
        break;
      case 3:
        setStep2(data)
        break;
      case 4:
        setStep3(data)
        break;
      case 5:
        setStep4(data)
        break;

      default:
        break;
    }
  }

  async function complete() {
    const data = {
      ...step0,
      ...step1,
      ...step2,
      ...step3,
      ...step4,
    }

    firebase.firestore().collection('users').add(data);
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
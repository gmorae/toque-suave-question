import { QuestionsProvider } from '../contexts/questionsContext'
import '../styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <QuestionsProvider>
      <Component {...pageProps} />
    </QuestionsProvider>
  )
}

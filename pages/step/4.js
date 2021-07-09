import { motion } from "framer-motion"
import Head from 'next/head'
import { useContext, useEffect, useState } from "react"
import { QuestionsContext } from "../../contexts/questionsContext"

import styles from '../../styles/PassoOne.module.css'

export default function index() {

    const { setQuestion, complete } = useContext(QuestionsContext)

    const [animateLogo, setAnimateLogo] = useState()
    const [animateForm, setAnimateForm] = useState()

    const [veracidade, setVeracidade] = useState(``)

    useEffect(() => {

        const windowWidth = document.documentElement.offsetWidth

        if (windowWidth > 768) {
            setAnimateLogo({ scale: 0.4, y: -100 })
            setAnimateForm({ y: -300 })
        } else {
            setAnimateLogo({ scale: 0.6, y: -50 })
            setAnimateForm({ y: -150 })
        }

    }, [])

    useEffect(() => {
        const formData = {
            veracidade
        }
        setQuestion(5, formData)
    }, [veracidade])

    return (

        <div className={`${styles.container} container`}>
            <Head>
                <title>Questionário - Resumo</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <motion.img
                src="/logo.png"
                animate={animateLogo}
                transition={{ duration: 2 }}
            />

            <motion.main
                animate={animateForm}
                transition={{ duration: 2 }}
                className="box"
            >
                <h1>4. Resumo</h1>

                <div className="form-group">
                    <span>Pratica alguma atividade física ?</span>
                    <div className="radios">

                        <div className="form-check">
                            <input
                                type="radio"
                                name="veracidade"
                                onChange={text => setVeracidade(text.target.value)}
                                value="S"
                                id="veracidadeSim"
                            />
                            <label for="veracidadeSim">Sim</label>
                        </div>

                        <div className="form-check">
                            <input
                                type="radio"
                                name="veracidade"
                                onChange={text => setVeracidade(text.target.value)}
                                value="N"
                                id="veracidadeNao"
                            />
                            <label for="veracidadeNao">Não</label>
                        </div>
                    </div>
                </div>

                <button style={{ margin: 'auto' }}  className="cian" onClick={() => complete()} >Finalizar</button>

            </motion.main>

        </div>
    )
}

import { motion } from "framer-motion"
import Head from 'next/head'
import { useRouter } from "next/router"
import { useContext, useEffect, useState } from "react"
import { QuestionsContext } from "../../contexts/questionsContext"

import styles from '../../styles/PassoOne.module.css'

export default function index() {

    const { setQuestion } = useContext(QuestionsContext)

    const router = useRouter()

    const [animateLogo, setAnimateLogo] = useState()
    const [animateForm, setAnimateForm] = useState()

    const [atividadeFisica, setAtividadeFisica] = useState('N')
    const [liquido, setLiquido] = useState('N')
    const [alimentacao, setAlimentacao] = useState('N')
    const [massagem, setMassagem] = useState('N')

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

    const handleToNextStep = () => {
        const formData = {
            atividadeFisica,
            liquido,
            alimentacao,
            massagem
        }

        if (!formData) {
            alert('Preencha todos os campos para prosseguir')
        } else {
            setQuestion(4, formData)
            router.push('4')
        }
    }

    return (

        <div className={`${styles.container} container`}>
            <Head>
                <title>Questionário - Toque suave - Passo 3</title>
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
                <h1>3. Dados Habituais</h1>

                <form>
                    <div className="form-group">
                        <span>Pratica alguma atividade física ?</span>
                        <div className="radios">

                            <div className="form-check">
                                <input
                                    type="radio"
                                    name="atividadeFisica"
                                    onChange={text => setAtividadeFisica(text.target.value)}
                                    value="S"
                                    id="atividadeFisicaSim"
                                />
                                <label for="atividadeFisicaSim">Sim</label>
                            </div>

                            <div className="form-check">
                                <input
                                    type="radio"
                                    name="atividadeFisica"
                                    onChange={text => setAtividadeFisica(text.target.value)}
                                    value="N"
                                    id="atividadeFisicaNao"
                                />
                                <label for="atividadeFisicaNao">Não</label>
                            </div>
                        </div>
                        {atividadeFisica === 'S' && <input type="text" placeholder="Qual frequência ? De 0 à 10" />}
                    </div>
                    <div className="form-group">
                        <span>Ingere bastante liquido ?</span>
                        <div className="radios">

                            <div className="form-check">
                                <input
                                    type="radio"
                                    name="liquido"
                                    onChange={text => setLiquido(text.target.value)}
                                    value="S"
                                    id="liquidoSim"
                                />
                                <label for="liquidoSim">Sim</label>
                            </div>

                            <div className="form-check">
                                <input
                                    type="radio"
                                    name="liquido"
                                    onChange={text => setLiquido(text.target.value)}
                                    value="N"
                                    id="liquidoNao"
                                />
                                <label for="liquidoNao">Não</label>
                            </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <span>Sua alimentação é saudavel ?</span>
                        <div className="radios">

                            <div className="form-check">
                                <input
                                    type="radio"
                                    name="Alimentacao"
                                    onChange={text => setAlimentacao(text.target.value)}
                                    value="S"
                                    id="AlimentacaoSim"
                                />
                                <label for="AlimentacaoSim">Sim</label>
                            </div>

                            <div className="form-check">
                                <input
                                    type="radio"
                                    name="Alimentacao"
                                    onChange={text => setAlimentacao(text.target.value)}
                                    value="N"
                                    id="AlimentacaoNao"
                                />
                                <label for="AlimentacaoNao">Não</label>
                            </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <span>Você ja fez massagem alguma vez ?</span>
                        <div className="radios">

                            <div className="form-check">
                                <input
                                    type="radio"
                                    name="Massagem"
                                    onChange={text => setMassagem(text.target.value)}
                                    value="S"
                                    id="MassagemSim"
                                />
                                <label for="MassagemSim">Sim</label>
                            </div>

                            <div className="form-check">
                                <input
                                    type="radio"
                                    name="Massagem"
                                    onChange={text => setMassagem(text.target.value)}
                                    value="N"
                                    id="MassagemNao"
                                />
                                <label for="MassagemNao">Não</label>
                            </div>
                        </div>
                    </div>
                </form>

                <button style={{ margin: 'auto' }}  className="cian" onClick={handleToNextStep} >Próximo passo</button>
            </motion.main>

        </div>
    )
}

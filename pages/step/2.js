import { motion } from "framer-motion"
import Head from 'next/head'
import { useContext, useEffect, useState } from "react"
import { useRouter } from 'next/router'
import InputMask from "react-input-mask";

import styles from '../../styles/PassoOne.module.css'
import { QuestionsContext } from "../../contexts/questionsContext";

export default function index() {

    const { setQuestion } = useContext(QuestionsContext)

    const router = useRouter()

    const [animateLogo, setAnimateLogo] = useState()
    const [animateForm, setAnimateForm] = useState()

    const [alergia, setAlergia] = useState('N')
    const [medicacao, setMedicacao] = useState('N')
    const [gestante, setGestante] = useState('')
    const [intestino, setIntestino] = useState('N')
    const [condicoes, setCondicoes] = useState('')
    const [cirurgia, setCirurgia] = useState('N')
    const [dor, setDor] = useState('N')
    const [ferida, setFerida] = useState('N')

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
            alergia,
            medicacao,
            gestante,
            intestino,
            condicoes,
            cirurgia,
            dor,
            ferida
        }

        if (!formData) {
            alert('Preencha todos os campos para prosseguir')
        } else {
            setQuestion(2, formData)
            router.push('3')
        }
    }

    return (

        <div className={`${styles.container} container`}>
            <Head>
                <title>Questionário - Toque suave - Passo 2</title>
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
                <h1>2. Dados Clínicos</h1>

                <form>
                    <div className="form-group">
                        <span>Possui alergia ?</span>
                        <div className="radios">
                            <div className="form-check">
                                <input
                                    type="radio"
                                    name="alergia"
                                    value="S"
                                    id="alergiaSim"
                                    onChange={text => setAlergia(text.target.value)}
                                />
                                <label for="alergiaSim">Sim</label>
                            </div>

                            <div className="form-check">
                                <input
                                    type="radio"
                                    name="alergia"
                                    value="N"
                                    id="alergiaNao"
                                    onChange={text => setAlergia(text.target.value)}
                                />
                                <label for="alergiaNao">Não</label>
                            </div>
                        </div>
                        {alergia === 'S' && <input type="text" placeholder="Quais tipos de alergias ? " />}
                    </div>
                    <div className="form-group">
                        <span>Faz uso de medicação ?</span>
                        <div className="radios">

                            <div className="form-check">
                                <input
                                    type="radio"
                                    name="medicacao"
                                    onChange={text => setMedicacao(text.target.value)}
                                    value="S"
                                    id="medicacaoSim"
                                />
                                <label for="medicacaoSim">Sim</label>
                            </div>

                            <div className="form-check">
                                <input
                                    type="radio"
                                    name="medicacao"
                                    onChange={text => setMedicacao(text.target.value)}
                                    value="N"
                                    id="medicacaoNao"
                                />
                                <label for="medicacaoNao">Não</label>
                            </div>
                        </div>
                        {medicacao === 'S' && <input type="text" placeholder="Quais tipos de medicação ? " />}
                    </div>

                    <div className="form-group">
                        <span>Esta gestante ou com suspeita ?</span>
                        <div className="radios">

                            <div className="form-check">
                                <input
                                    type="radio"
                                    name="gestante"
                                    onChange={text => setGestante(text.target.value)}
                                    value="S"
                                    id="gestanteSim"
                                />
                                <label for="gestanteSim">Sim</label>
                            </div>

                            <div className="form-check">
                                <input
                                    type="radio"
                                    name="gestante"
                                    onChange={text => setGestante(text.target.value)}
                                    value="N"
                                    id="gestanteNao"
                                />
                                <label for="gestanteNao">Não</label>
                            </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <span>Fez cirurgia recentemente ?</span>
                        <div className="radios">

                            <div className="form-check">
                                <input
                                    type="radio"
                                    name="cirurgia"
                                    onChange={text => setCirurgia(text.target.value)}
                                    value="S"
                                    id="cirurgiaSim"
                                />
                                <label for="cirurgiaSim">Sim</label>
                            </div>

                            <div className="form-check">
                                <input
                                    type="radio"
                                    name="cirurgia"
                                    onChange={text => setCirurgia(text.target.value)}
                                    value="N"
                                    id="cirurgiaNao"
                                />
                                <label for="cirurgiaNao">Não</label>
                            </div>

                        </div>
                        {cirurgia === 'S' && (
                            <>
                                <InputMask
                                    mask="99/99/9999"
                                    type="tel"
                                    disableUnderline
                                    placeholder="Quando foi realizada"

                                />
                                <input type="text" placeholder="Onde foi realizada ?" />
                            </>
                        )}
                    </div>
                    <div className="form-group">
                        <span>Apresenta dor ?</span>
                        <div className="radios">

                            <div className="form-check">
                                <input
                                    type="radio"
                                    name="dor"
                                    onChange={text => setDor(text.target.value)}
                                    value="S"
                                    id="dorSim"
                                />
                                <label for="dorSim">Sim</label>
                            </div>

                            <div className="form-check">
                                <input
                                    type="radio"
                                    name="dor"
                                    onChange={text => setDor(text.target.value)}
                                    value="N"
                                    id="dorNao"
                                />
                                <label for="dorNao">Não</label>
                            </div>
                        </div>
                        {dor === 'S' && <input type="text" placeholder="Aonde ? " />}

                    </div>
                    <div className="form-group">
                        <span>Tem algum ferida no corpo ?</span>
                        <div className="radios">

                            <div className="form-check">
                                <input
                                    type="radio"
                                    name="ferida"
                                    onChange={text => setFerida(text.target.value)}
                                    value="S"
                                    id="feridaSim"
                                />
                                <label for="feridaSim">Sim</label>
                            </div>

                            <div className="form-check">
                                <input
                                    type="radio"
                                    name="ferida"
                                    onChange={text => setFerida(text.target.value)}
                                    value="N"
                                    id="feridaNao"
                                />
                                <label for="feridaNao">Não</label>
                            </div>
                        </div>
                        {ferida === 'S' && <input type="text" placeholder="Aonde ? " />}
                    </div>
                    <select name="intestino" value={intestino} onChange={text => setIntestino(text.target.value)}>
                        <option disabled selected value="">Como funciona seu intestino ? </option>
                    </select>

                    <select name="condicoes" value={condicoes} onChange={text => setCondicoes(text.target.value)}>
                        <option disabled selected value="">Posui algumas das condições listadas abaixo ? </option>
                    </select>
                </form>

                <button style={{ margin: 'auto' }}  className="cian" onClick={handleToNextStep} >Próximo passo</button>
            </motion.main>

        </div>
    )
}

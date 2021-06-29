import { useContext, useEffect, useState } from "react"
import Head from 'next/head'
import { useRouter } from 'next/router'
import { motion } from "framer-motion"
import InputMask from "react-input-mask";

import styles from '../../styles/PassoOne.module.css'
import { QuestionsContext } from "../../contexts/questionsContext";

export default function index() {

    const { setQuestion } = useContext(QuestionsContext)

    const router = useRouter()

    const [animateLogo, setAnimateLogo] = useState()
    const [animateForm, setAnimateForm] = useState()

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [date, setDate] = useState('')
    const [genre, setGenre] = useState('')
    const [profession, setProfession] = useState('')
    const [objetivo, setObjetivo] = useState('')

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
            name,
            email,
            date,
            phone,
            genre,
            profession,
            objetivo
        }

        if (!name, !email, !phone, !date, !genre) {
            alert('Preencha todos os campos para prosseguir')
        } else {
            setQuestion(1, formData)
            router.push('2')
        }
    }

    return (

        <div className={`${styles.container} container`}>
            <Head>
                <title>Questionário - Toque suave - Passo 1</title>
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
                <h1>1. Dados Pessoais</h1>

                <form>
                    <input
                        type="text"
                        placeholder="Nome Completo"
                        value={name}
                        onChange={text => setName(text.target.value)}
                    />
                    <input
                        type="email"
                        placeholder="E-mail"
                        value={email}
                        onChange={text => setEmail(text.target.value)}
                    />
                    <InputMask
                        mask="+5\5 (99) 99999-9999"
                        disableUnderline
                        type="tel"
                        placeholder="Celular/WhatsApp"
                        value={phone}
                        onChange={text => setPhone(text.target.value)}
                    />
                    <InputMask
                        mask="99/99/9999"
                        type="tel"
                        disableUnderline
                        placeholder="Data de Nascimento"
                        value={date}
                        onChange={text => setDate(text.target.value)}
                    />
                    <select className="select" value={genre} onChange={text => setGenre(text.target.value)}>
                        <option disabled selected value="">Selecione um sexo</option>
                        <option value="M">Masculino</option>
                        <option value="F">Feminino</option>
                    </select>
                    <input
                        type="text"
                        placeholder="Profissão"
                        value={profession}
                        onChange={text => setProfession(text.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Objetivo da massagem"
                        value={objetivo}
                        onChange={text => setObjetivo(text.target.value)}
                    />
                </form>

                <button style={{ margin: 'auto' }} className="cian" onClick={handleToNextStep} >Próximo passo</button>
            </motion.main>

        </div>
    )
}

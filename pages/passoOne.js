import { motion } from "framer-motion"
import Head from 'next/head'
import { useEffect, useState } from "react"
import InputMask from "react-input-mask";

import styles from '../styles/PassoOne.module.css'

export default function PassoOne() {

    const [animateLogo, setAnimateLogo] = useState()
    const [animateForm, setAnimateForm] = useState()

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [date, setDate] = useState('')
    const [genre, setGenre] = useState('')
    const [profession, setProfession] = useState('')
    const [objetivo, setObjetivo] = useState('')
    const [formData, setFormData] = useState()

    useEffect(() => {

        const windowWidth = document.documentElement.offsetWidth

        if (windowWidth > 420) {
            setAnimateLogo({ scale: 0.4, y: -100 })
            setAnimateForm({ y: -300 })
        } else {
            setAnimateLogo({ scale: 0.7, y: -50 })
            setAnimateForm({ y: -100 })
        }

    }, [])


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
                    <input type="text" placeholder="Nome Completo" />
                    <input type="email" placeholder="E-mail" />
                    <InputMask mask="+5\5 (99) 99999-9999" disableUnderline  type="tel" placeholder="Celular/WhatsApp" />
                    <InputMask mask="99/99/9999" type="tel" disableUnderline  placeholder="Data de Nascimento" />
                    <select className="select">
                        <option disabled value="">Selecione um sexo</option>
                        <option value="M">Masculino</option>
                        <option value="F">Feminino</option>
                    </select>
                    <input type="text" placeholder="Profissão" />
                    <input type="text" placeholder="Objetivo da massagem" />
                </form>

                <button className={` cian ${!formData && 'disable'}`}>Próximo passo</button>
            </motion.main>

        </div>
    )
}

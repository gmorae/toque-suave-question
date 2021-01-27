import { motion } from "framer-motion"
import Head from 'next/head'
import { useEffect, useState } from "react"

import styles from '../styles/PassoOne.module.css'

export default function PassoOne() {

    const [animateLogo, setAnimateLogo] = useState()
    const [animateForm, setAnimateForm] = useState()

    useEffect(() => {

        const windowWidth = document.documentElement.offsetWidth

        console.log(windowWidth);
        if (windowWidth > 420) {
            setAnimateLogo({ scale: 0.4, y: -150 })
            setAnimateForm({ y: -300 })
        } else {
            setAnimateLogo({ scale: 0.7, y: -50 })
            setAnimateForm({ y: -100 })
        }

    }, [])


    return (

        <div className={styles.container}>
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
            >
                <h1>1. Dados Pessoais</h1>
            </motion.main>

        </div>
    )
}

import { motion } from "framer-motion"
import Head from 'next/head'
import { useEffect, useState } from "react"

import styles from '../../styles/PassoOne.module.css'

export default function index() {

    const [animateLogo, setAnimateLogo] = useState()
    const [animateForm, setAnimateForm] = useState()

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
                <h1>2. Dados Clínicos</h1>



                <button className="cian" onClick={() => { }} >Próximo passo</button>
            </motion.main>

        </div>
    )
}

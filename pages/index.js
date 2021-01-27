import { motion } from "framer-motion"

import Head from 'next/head'
import { useState } from "react"
import styles from '../styles/Home.module.css'

export default function Home() {

  const [massage, setMassage] = useState('')
  const [massageItem, setMassageItem] = useState()

  const changeMassage = text => {
    const [optionsFiltered] = options.filter(option => option.name === text);
    setMassage(text)
    setMassageItem(optionsFiltered);
  }

  const options = [
    {
      id: 1,
      name: 'Massagem relaxante',
      value: 'Massagem relaxante',
      description: 'Descrião de Massagem relaxante'
    },
    {
      id: 2,
      name: 'Massagem com pedras quentes',
      value: 'Massagem com pedras quentes',
      description: 'Descrião de Massagem com pedras quentes'
    },
    {
      id: 3,
      name: 'Massagem modeladora',
      value: 'Massagem modeladora',
      description: 'Descrião de Massagem modeladora'
    },
    {
      id: 4,
      name: 'Massagem terapêutica',
      value: 'Massagem terapêutica',
      description: 'Descrião de Massagem terapêutica'
    },
    {
      id: 5,
      name: 'Drenagem linfática',
      value: 'Drenagem linfática',
      description: 'Descrião de Drenagem linfática'
    },
    {
      id: 6,
      name: 'Bambuterapia',
      value: 'Bambuterapia',
      description: 'Descrião de Bambuterapia'
    },
  ]

  const handleToStep = () => {
    console.log('o')
  }

  const handleEdit = () => {
    setMassageItem('')
  }

  return (

    <div className={styles.container}>
      <Head>
        <title>Questionário - Toque suave</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {
        !!massageItem
          ? (
            <motion.main
              animate={{ x: 0, y: 250 }}
              transition={{ duration: 1 }}
            >
              <div>
                <h1>
                  {massageItem.name}
                </h1>
                <img onClick={() => handleEdit()} src="/icon-edit.svg" alt="icon edit" />
              </div>
              <p>{massageItem.description}</p>
              <button onClick={() => handleToStep()} className="cian">Confirmar</button>
            </motion.main>
          )
          : (
            <section>
              <motion.img
                src="/logo.png"
                animate={{ scale: 0.7, y: 0 }}
                transition={{ duration: 2 }}
              />

              <motion.select
                animate={{ scale: 2 }}
                transition={{ duration: 1.5 }}
                className={styles.select}
                value={massage}
                onChange={text => changeMassage(text.target.value)}
              >
                <option disabled value="">Selecione um tipo de massagem</option>
                {
                  options.map(option => (
                    <option key={option.id} value={option.name}>{option.name}</option>
                  ))
                }
              </motion.select>
            </section>
          )
      }
    </div>
  )
}

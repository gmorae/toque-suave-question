import { motion } from "framer-motion"

import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {

  const options = [
    {
      id: 1,
      name: 'Massagem relaxante',
      value: 'Massagem relaxante'
    },
    {
      id: 2,
      name: 'Massagem com pedras quentes',
      value: 'Massagem com pedras quentes'
    },
    {
      id: 3,
      name: 'Massagem modeladora',
      value: 'Massagem modeladora'
    },
    {
      id: 4,
      name: 'Massagem terapêutica',
      value: 'Massagem terapêutica'
    },
    {
      id: 5,
      name: 'Drenagem linfática',
      value: 'Drenagem linfática'
    },
    {
      id: 6,
      name: 'Bambuterapia',
      value: 'Bambuterapia'
    },
  ]

  return (



    <div className={styles.container}>
      <Head>
        <title>Questionário - Toque suave</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <motion.img
        src="/logo.png"
        animate={{ scale: 0.7, y: 0 }}
        transition={{ duration: 2 }}
      />

      <motion.select
        animate={{ scale: 2 }}
        transition={{ duration: 1.5 }}
        className={styles.select}
      >
        <option selected disabled>Selecione um tipo de massagem</option>
        {
          options.map(option => (
            <option key={option.id} value={option.value}>{option.name}</option>
          ))
        }
      </motion.select>
    </div>
  )
}

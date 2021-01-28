import { motion } from "framer-motion"
import Link from 'next/link'
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
      description: 'Técnica manual suave, possui o objetivo de promover relaxamento físico e mental. Pode ser utilizada como prevenção de estresse, ansiedade, dores, etc. ou para aliviar esses fatores. Proporciona melhora do sono. Quem não ama uma massagem relaxante né?'
    },
    {
      id: 2,
      name: 'Massagem com pedras quentes',
      value: 'Massagem com pedras quentes',
      description: 'É uma termoterapia relaxante, com potencial energético, feita com pedras vulcânicas aquecidas. Possui diversos benefícios, sendo o alívio de tensões o principal deles. A aplicação das pedras quentes é realizada em combinação com manobras manuais. A troca de temperatura otimiza o relaxamento.'
    },
    {
      id: 3,
      name: 'Massagem modeladora',
      value: 'Massagem modeladora',
      description: 'Composta por movimentos intensos, o principal objetivo dessa técnica é remodelar as curvaturas corporais. Feita com creme/gel termoativo que potencializa o tratamento. Realizada manualmente, com auxílio de bambus e principalmente em locais com gordura localizada. Vem intensificar o seu projeto verão!'
    },
    {
      id: 4,
      name: 'Massagem terapêutica',
      value: 'Massagem terapêutica',
      description: 'Terapia manual com foco no tratamento de dores, gerando alívio, sejam elas geradas por questões emocionais, esforço físico, má postura ou patologias propriamente ditas. Assim como a massagem relaxante: atua trazendo benefícios físicos e mentais. Cuide-se bem!'
    },
    {
      id: 5,
      name: 'Drenagem linfática',
      value: 'Drenagem linfática',
      description: 'Procedimento suave, superficial cujo foco é otimizar a circulação e eliminação da linfa presente em nosso corpo. Resulta na redução do inchaço, promove relaxamento, entre outros benefícios. Pode ser feita como prevenção ou tratamento. Xô inchaço!'
    },
    {
      id: 6,
      name: 'Bambuterapia',
      value: 'Bambuterapia',
      description: 'Técnica  relaxante complementar feita inteiramente com bambus. Possui propriedades drenantes, relaxantes, tonificantes, modeladoras e energéticas. O uso dos bambus permite realizar manobras mais profundas. É bem eficiente e promove benefícios ao corpo e à mente. Se a massagem relaxante já é boa, imagina só a bambuterapia!'
    },
  ]

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
                <motion.img
                  whileHover={{ scale: 1.5 }}
                  onClick={() => handleEdit()}
                  src="/icon-edit.svg"
                  alt="icon edit"
                />
              </div>
              <p>{massageItem.description}</p>
              <Link href="/step/1">
                <button className="cian">Próximo passo</button>
              </Link>
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
                animate={{ scale: [0.5, 1] }}
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

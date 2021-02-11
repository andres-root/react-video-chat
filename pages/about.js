import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Title from '../components/title'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>React video chat</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Title />
      </main>
    </div>
  )
}

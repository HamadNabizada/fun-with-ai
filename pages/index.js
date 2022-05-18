import styles from '../styles/Home.module.css'
import Header from './components/Header'
import Footer from './components/Footer'
import MainChat from './components/MainChat'

export default function Home() {
  return (
    <main className={styles.wrapper}>
      <Header />
      <MainChat />
      <Footer />
    </main>
  )
}

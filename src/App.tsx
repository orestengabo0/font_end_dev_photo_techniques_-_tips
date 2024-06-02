import NavBar from './components/NavBar'
import Hero from './components/Home.tsx/Hero'
import styles from './App.module.css'

const App = () => {
  return (
    <div className={styles['*']}>
      <NavBar />
      <Hero />
    </div>
  )
}

export default App
import NavBar from './components/NavBar'
import styles from './App.module.css'
import Home from './components/Home'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <div className={styles['*']}>
      <NavBar />
      <Home />
      <Footer />
    </div>
  )
}

export default App
import NavBar from './components/NavBar'
import styles from './App.module.css'
import Home from './components/Home'

const App = () => {
  return (
    <div className={styles['*']}>
      <NavBar />
      <Home />
    </div>
  )
}

export default App
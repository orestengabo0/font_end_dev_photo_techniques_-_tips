import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import NavBar from './components/NavBar'
import styles from './App.module.css'
import Home from './components/Home'
import Footer from './components/Footer/Footer'
import Services from './components/Services/Services'
import Contacts from './components/Contacts/Contacts'

const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/services' element={<Services />} />
        <Route path='/contacts' element={<Contacts />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
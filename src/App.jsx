import './App.css'
import NavBar from './componets/NavBar'
import Footer from './componets/Footer'
import Banner from './componets/Banner'
import ProyectList from './componets/ProyectList'
import AboutMe from './componets/AboutMe'
import KnowledgeListt from './componets/KnowledgeListt'
import { useState } from 'react'




function App() {

  const [loading, setloading] = useState(false)


  return (
    <div className="App">
  
            <NavBar />
            <Banner />
            <AboutMe />
            <KnowledgeListt />
            <ProyectList />
            <Footer />
     

    </div>
  )
}

export default App

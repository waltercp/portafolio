import './App.css'
import NavBar from './componets/NavBar'
import Footer from './componets/Footer'
import Banner from './componets/Banner'
import ProyectList from './componets/ProyectList'
import KnowledgeListt from './componets/KnowledgeListt'
import SoftSkills from './componets/SoftSkills'





function App() {
  return (
    <div className="App">
  
            <NavBar />
            <Banner />
            <SoftSkills/>
            <KnowledgeListt />
            <ProyectList />
            <Footer />
     

    </div>
  )
}

export default App

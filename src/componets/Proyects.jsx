
import './styles/proyects.css'
const Proyects = ({ proyecto }) => {


  const handleCV = () => {
    window.open(proyecto.url)
  }
  return (
    <div className='proyects' >
      <a href={proyecto.url} target="_blank" rel="noopener noreferrer">
        <img src={proyecto.img} alt="" />
      </a>

      <div className='proyect-content' >
        <h3>{proyecto.name}</h3>
        <p>{proyecto.descripcion}</p>
        <button onClick={handleCV}>Click here</button>
      </div>
    </div>

  )
}

export default Proyects
import React from 'react'
import './styles/knowledge.css'

const Knowledge = ({ knowledges }) => {
    return (
        <div className='knowlegge-container'>
                <div className='knowlegge-container-img'>
                    <img src={knowledges.img} alt="" />
                </div>
                <div className='knowlegge-container-info'>
                    <h3>{knowledges.name}</h3>
                    <p>{knowledges.descripcion}</p>
                </div>
            
        </div>
    )
}

export default Knowledge
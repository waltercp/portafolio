import React from 'react'
import './styles/knowledge.css'

const Knowledge = ({ knowledges }) => {

    const handleKnowledges = () => {
        window.open(knowledges.descripcion)
    }

    return (
        <div onClick={handleKnowledges} className='knowlegge-container'>
            <div className='knowlegge-container-img'>
                <img src={knowledges.img} alt="" />
            </div>
            <div className='knowlegge-container-info'>
                <h3>{knowledges.name}</h3>

            </div>

        </div>
    )
}

export default Knowledge
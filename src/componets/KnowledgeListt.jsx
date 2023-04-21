import React from 'react'
import './styles/knowledgeListt.css'
import Knowledge from './Knowledge'



const knowledgeUno = {
    img: '/knoweldge/sql.png',
    name: 'Sql Server',
    descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, cupiditate hic. Deleniti expedita sed asperiores obcaecati doloremque facere cumque.'
}

const knowledgeDos = {
    img: '/knoweldge/html.png',
    name: 'HTML',
    descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, cupiditate hic. Deleniti expedita sed asperiores obcaecati doloremque facere cumque.'

}
const knowledgeTres = {
    img: '/knoweldge/css.png',
    name: 'CSS',
    descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, cupiditate hic. Deleniti expedita sed asperiores obcaecati doloremque facere cumque.'

}
const knowledgeCuatro = {
    img: '/knoweldge/reaact.png',
    name: 'React',
    descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, cupiditate hic. Deleniti expedita sed asperiores obcaecati doloremque facere cumque.'

}


const KnowledgeListt = () => {
    return (
        <div className='knowledgeListt'>
            <h2> <span>My</span> knowledge</h2>
            <div className='knowledgeListt-content' >
                <Knowledge knowledges={knowledgeUno} />
                <Knowledge knowledges={knowledgeDos} />
                <Knowledge knowledges={knowledgeTres} />
                <Knowledge knowledges={knowledgeCuatro} />
            </div>
        </div>
    )
}

export default KnowledgeListt
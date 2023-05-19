import React from 'react'
import './styles/knowledgeListt.css'
import Knowledge from './Knowledge'



const knowledgeUno = {
    img: '/knoweldge/sql.png',
    name: 'Sql Server',
    descripcion:'https://nextech.pe/certificates/certificado-sql-server-expert-ha/?c=33666&u=8723'
}
const knowledgeDos = {
    img: '/knoweldge/html.png',
    name: 'HTML',
    descripcion:'https://certificates.academlo.com/en/verify/27899935474727'
}
const knowledgeTres = {
    img: '/knoweldge/css.png',
    name: 'CSS',
    descripcion:'https://certificates.academlo.com/en/verify/27899935474727'
}
const knowledgeCuatro = {
    img: '/knoweldge/reaact.png',
    name: 'React',
    descripcion:'https://certificates.academlo.com/en/verify/97014180950725'
}

const knowledgeCinco = {
    img: '/knoweldge/js.png',
    name: 'JavaScrit',
    descripcion:'https://certificates.academlo.com/en/verify/27899935474727'
}

const knowledgeSeis = {
    img: '/knoweldge/excel.png',
    name: 'Excel',
    descripcion:''
}

const knowledgeSiete= {
    img: '/knoweldge/python.png',
    name: 'Python',
    descripcion:''
}

const knowledgeOcho= {
    img: '/knoweldge/scrum.png',
    name: 'Scrum',
    descripcion: 'https://www.scrumstudy.com/certification/verify?type=SFC&number=953843'

}
const knowledgeNueve= {
    img: '/knoweldge/powerBy.png',
    name: 'Power By',
    descripcion: 'https://nextech.pe/certificates/certificado-conferencia-power-bi/?c=7853&u=8723'

}
const knowledgeDies= {
    img: '/knoweldge/redux.png',
    name: 'Redux',
    descripcion: 'https://certificates.academlo.com/en/verify/97014180950725'

}


const KnowledgeListt = () => {
    return (
        <div className='knowledgeListt' id='knowledge'>
            <h2> <span>My</span> knowledge</h2>
            <div className='knowledgeListt-content' >
                <Knowledge knowledges={knowledgeUno} />
                <Knowledge knowledges={knowledgeDos} />
                <Knowledge knowledges={knowledgeTres} />
                <Knowledge knowledges={knowledgeCuatro} />
                <Knowledge knowledges={knowledgeCinco}/>
                <Knowledge knowledges={knowledgeSeis}/>
                <Knowledge knowledges={knowledgeSiete}/>
                <Knowledge knowledges={knowledgeOcho}/>
                <Knowledge knowledges={knowledgeNueve}/>
                <Knowledge knowledges={knowledgeDies}/>
            </div>
        </div>
    )
}

export default KnowledgeListt
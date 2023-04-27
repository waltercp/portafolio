import React from 'react'
import './styles/knowledgeListt.css'
import Knowledge from './Knowledge'



const knowledgeUno = {
    img: '/knoweldge/sql.png',
    name: 'Sql Server',
    descripcion: 'He estudiado y obtenido experiencia en SQL Server, enfocada en el almacenamiento y la recuperación de datos de manera segura y eficiente. A través de proyectos personales y prácticas, así como en la creación y ejecución de consultas complejas.',
}
const knowledgeDos = {
    img: '/knoweldge/html.png',
    name: 'HTML',
    descripcion: 'Mis conocimientos en HTML, me permiten crear páginas web atractivas y funcionales que satisfagan las necesidades del clientes y brinden una experiencia agradable al usuario, ademas puedo estructurar contenidos de manera efectiva, creando diseños intuitivos y fáciles de usar.'

}
const knowledgeTres = {
    img: '/knoweldge/css.png',
    name: 'CSS',
    descripcion: 'Mis conocimientos en CSS me permiten personalizar el aspecto de las páginas web de acuerdo con las necesidades del cliente, cambiando colores, fuentes, tamaños de texto, alineación, espaciado y otros aspectos del diseño. Además, puedo crear diseños responsivos que se adapten a diferentes tamaños de pantalla.'
}
const knowledgeCuatro = {
    img: '/knoweldge/reaact.png',
    name: 'React',
    descripcion: 'Tengo conocimientos en el uso de herramientas clave como useState y useEffect para manejar el estado y los efectos secundarios en los componentes. Además, tengo conocimientos en el consumo de API en React utilizando librerías como Axios y en la creación de componentes reutilizables.'

}

const knowledgeCinco = {
    img: '/knoweldge/js.png',
    name: 'JavaScrit',
    descripcion: 'Puedo crear interacciones dinámicas y funcionales en las páginas web, mejorando la experiencia del usuario. Mis habilidades en JavaScript me permiten crear elementos interactivos como botones, formularios, ventanas emergentes y animaciones, que ayudan a mejorar la usabilidad y la navegación en línea. '
}

const knowledgeSeis = {
    img: '/knoweldge/excel.png',
    name: 'Excel',
    descripcion: 'Puedo trabajar con diferentes tipos de datos y realizar tareas básicas de análisis, como ordenar y filtrar datos, utilizar funciones básicas de Excel y ademas de crear informes personalizados para resumir y presentar los datos de manera efectiva. Puedes crear tablas dinámicas que permitan filtrar, ordenar y agrupar los datos para obtener información valiosa y presentarla de una manera clara y concisa.'

}

const knowledgeSiete= {
    img: '/knoweldge/python.png',
    name: 'Python',
    descripcion: 'Tengo conocimientos básicos en Python y estoy en proceso de aprendizaje y desarrollo de mis habilidades en este lenguaje de programación. He estudiado la sintaxis básica de Python y he implementado algunos pequeños proyectos de programación utilizando las funciones y librerías más comunes en Python.'

}

const knowledgeOcho= {
    img: '/knoweldge/scrum.png',
    name: 'Scrum',
    descripcion: 'Tengo experiencia en proyectos universitarios y en proyectos personales. Soy capaz de trabajar en equipo de manera eficiente y colaborativa. Además, tengo habilidades en la planificación de sprints, la organización de reuniones diarias y la realización de retrospectivas para garantizar el éxito del proyecto.'

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
            </div>
        </div>
    )
}

export default KnowledgeListt
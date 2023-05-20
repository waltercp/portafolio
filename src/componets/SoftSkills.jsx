import React, { useEffect, useRef, useState } from 'react'
import './styles/softSkills.css'
const SoftSkills = () => {

    
    const [animationName, setAnimationName] = useState("none")
    const ulRef = useRef()

    
    useEffect(() => {
        const handleScroll = ()=>{
          const ul = ulRef.current
          const {y} = ul.getBoundingClientRect()
      
          const animation = y<= 600 ? 'block': 'none'
          
          setAnimationName(animation)
      
        }
        window.addEventListener('scroll', handleScroll)
        return ()=>{
        window.removeEventListener('scroll', handleScroll)
      }
      }, [])

    return (
        <div className='statsSection'>

            <ul ref={ulRef} className='statsList'>     
                        <li>
                            <span>100</span>
                            <div className='statBaseBar' style={{ display: animationName }}>
                                <div className='statBar' style={{ width: (90 / 100 * 100) + "%" }}></div>
                            </div>
                        </li>
                        <li>
                            <span>100</span>
                            <div className='statBaseBar' style={{ display: animationName }}>
                                <div className='statBar' style={{ width: (90 / 100 * 100) + "%" }}></div>
                            </div>
                        </li>
                        <li>
                            <span>100</span>
                            <div className='statBaseBar' style={{ display: animationName }}>
                                <div className='statBar' style={{ width: (70 /  100 * 100) + "%" }}></div>
                            </div>
                        </li>
                        <li>
                            <span>100</span>
                            <div className='statBaseBar' style={{ display: animationName }}>
                                <div className='statBar' style={{ width: (65 /  100 * 100) + "%" }}></div>
                            </div>
                        </li>
                        <li>
                            <span>100</span>
                            <div className='statBaseBar' style={{ display: animationName }}>
                                <div className='statBar' style={{ width: (80 /  100 * 100) + "%" }}></div>
                            </div>
                        </li>
            </ul>

        </div>
    )
}

export default SoftSkills
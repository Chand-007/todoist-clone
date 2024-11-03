import '../styles/SideNav.css'
import Title from './SideNavComponents/Title'
import { useState } from 'react'

export default function SideNav(){
    const [width,setWidth] = useState(false)
    function handleWidth(){
        setWidth(prev=>!prev)
        console.log(width)
    }
    return(
        <div className="sidenav-container" style={{}}>
            <Title handleWidth={handleWidth}/>
        </div>
    )
}
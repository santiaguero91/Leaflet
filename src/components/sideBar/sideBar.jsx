
import { useState } from 'react'
import "../../App.css"
import { Container, SidebarDiv } from './sideBarStyle'

function SideBar() {
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => setIsOpen(!isOpen)
  return (
    <Container>
    <div style={{width: isOpen ? "50vw" : "0" ,  transition:"1s"}} className='sidebar' >
    <button onClick={toggle}> SIDEBAR</button>
    {isOpen && <SidebarDiv> 
        <h2>Filtros</h2>
    </SidebarDiv>}

    </div>
    </Container>
  )
}

export default SideBar
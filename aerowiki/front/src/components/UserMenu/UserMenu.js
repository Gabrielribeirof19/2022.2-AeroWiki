import React, { useState } from 'react'
import './UserMenu.css'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as faIcons from '@fortawesome/free-solid-svg-icons'
import { UserMenuData } from './UserMenuData'

function UserMenu() {
    const [usermenu, setUsermenu] = useState(true)
    
    const showUsermenu = () => setUsermenu(!usermenu)

  return (
    <>
    <div id='username'>
        <span>Nome_Sobrenome</span>
        <Link to='#' className='user-menu-icon'>
            <FontAwesomeIcon icon={faIcons.faCircleUser} onClick={showUsermenu} />
        </Link> 
    </div>

    <nav id={usermenu ? 'usermenu' : 'usermenu-active'}>
        <div id='usermenu-items' onClick={showUsermenu}>
            {UserMenuData.map((item, index) => {
                return(
                    <div id='area' key={index}>
                        <Link to={item.path} id='button'>
                            {item.icon}
                            <span>{item.title}</span>
                        </Link>
                    </div>
                )
            })}
        </div>
    </nav>
    </>
  )
}

export default UserMenu

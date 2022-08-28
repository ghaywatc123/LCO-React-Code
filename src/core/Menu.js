import React from 'react'
import { Link, withRouter } from 'react-router-dom'


 const currentTab = (history, path) => {
    if (history.location.pathname===path) {
        return {color: '#2ecc72'}
    } else {
        return {color: '#ffffff'}
    }
 }

 const Menu = ({history, path}) => {
  return (
    <div>
      <ul className='nav nav-tabs bg-dark'>
        <Link style={currentTab(history, "/")} className= "nav-link" to="/">Home</Link>
        <li className='nav-item'><a className='nav-link' href='#'>Signin</a></li>
      </ul>
    </div>
  )
}

export default withRouter(Menu);

import {Link} from 'react-router-dom'




const NavBar = () => {

  return (
    <header>
      <nav>
      <Link to = '/PastBands'> Past Bands</Link>
        <Link to = '/'>Home</Link>
      
       
      </nav>
    </header>
  )
}

export default NavBar

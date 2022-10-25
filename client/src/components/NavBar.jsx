import {Link} from 'react-router-dom'




const NavBar = () => {

  return (
    <header>
      <nav>
        <Link to = '/'>Create a Band</Link>
        <Link to = '/PastBands'> Past Bands</Link>
       
      </nav>
    </header>
  )
}

export default NavBar

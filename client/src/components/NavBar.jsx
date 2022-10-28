import {Link} from 'react-router-dom'









const NavBar = (props) => {

  return (
    <header>
      <nav>
      <Link to = '/PastBands'> Past Bands</Link>
        <Link onClick={() =>  props.setCurrentPage(0)} to = '/'>Home</Link>
      
       
      </nav>
    </header>
  )
}

export default NavBar

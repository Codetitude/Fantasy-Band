import { useState , useEffect} from 'react'
import axios from 'axios'



const PastBands = (props) => {

const [getbands , setGetBands] = useState([])

useEffect(() => {
  const getCreatedBand  = async () => {
    const response = await axios.get(`http://localhost:3001/musicians/newband`)
   setGetBands(response.data.bands)
   console.log(response)
    }
   getCreatedBand()
  }
 
, [])

console.log(getbands)


  return(
    <div>  
            
         {getbands.map((getband)  => (
      <div key={getband.id} value={getband.id} name={getband.name}>
        
        {getband.name}
         <button>update name</button>
        <button>delete band</button> 

      </div>
    ))}   
    </div>
  )
}


export default PastBands
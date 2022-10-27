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




const handleDelete = (id) => {
  
  const res = axios.findByIdAndDelete(`http://localhost:3001/musicians/newband/`, (id))
  console.log(res, id)
  


}





  return(
    <div>  
            
         {getbands.map((getband)  => (
      <div key={getband.id} value={getband.id} name={getband.name}>
        
        {getband.name}
        <input placeholder='new band name'></input>
         <button>update name</button>
        <button onClick={handleDelete}>delete band</button> 

      </div>
    ))}   
    </div>
  )
}


export default PastBands
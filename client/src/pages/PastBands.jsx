import { useState , useEffect} from 'react'
import axios from 'axios'



const PastBands = (props) => {
  
  const [getbands , setGetBands] = useState([])

  const [updateBand, setUpdateBand] = useState({name:''})

  
  const getCreatedBand  = async () => {
    const response = await axios.get(`http://localhost:3001/musicians/newband`)
   setGetBands(response.data.bands)
   console.log(response)
    }
  


  useEffect(() => {
    getCreatedBand()

  }
 
, [])


const handleDelete = async (id) => {
  
  const res =  await axios.delete(`http://localhost:3001/musicians/newband/${id}`)
  getCreatedBand()
  

}


const handleUpdate = async (id) => {
  
  const res =  await axios.put(`http://localhost:3001/musicians/newband/${id}`,updateBand  )
  
 
  getCreatedBand()
  

}





  return(
    <div className = 'pastbands'>  
            
         {getbands.map((getband)  => (
      <div key={getband._id}  className = "pastbandlist">
        
        {getband.name}
        <label >  :  &nbsp; &nbsp; &nbsp;  </label>
        <div className='update' >
        <input onChange={(e) => {setUpdateBand({name :e.target.value})}} placeholder='new band name'
       type = "text"></input>
         <button onClick={() => {handleUpdate(getband._id)}}>update name</button>
        <button onClick={() => handleDelete(getband._id)}>delete band</button> 
       </div>
      </div>
    ))}   
    </div>
  )
}


export default PastBands
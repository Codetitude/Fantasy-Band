import {  useState } from 'react'





const AddBand = (props) => {

  const [bandName ,setBandName] = useState('')


const handleChange = (e) =>{
  setBandName(e.target.value)
}


const handleSubmit = (e) => {
  e.preventDefault()
  props.setNewBand({...props.newBand, name: bandName})
  props.incrementPage()
  console.log(props.newBand)

}



  return(
    <div>
      <h1 className='hometitle'>Fantasy Band </h1>
      
<input


  type="text"
  name="search"
  value={props.bandName}
  placeholder="Give your band a name!"
  onChange={handleChange}
></input>
<button  onClick = {handleSubmit}type='submit'>Enter</button>
    


    </div>
  )
}


export default AddBand
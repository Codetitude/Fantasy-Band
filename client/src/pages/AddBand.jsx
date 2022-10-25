import {  useState } from 'react'




const AddBand = (props) => {

  const [newBand, setNewBand] = useState({
    name: "",
    members: [],
    totalRating: 0
  })

const [ singer , setSinger] = useState (false)
const [searchQuery, setSearchQuery] = useState('')






  return(
    <div>
      <h1 className='hometitle'>Fantasy Band </h1>
      <form className = " nameband " onSubmit={props.onSubmit}>
<input
  type="text"
  name="search"
  value={props.value}
  placeholder="Give your band a name!"
  onChange={props.onChange}
></input>
<button  onClick = {props.incrementPage}type='submit'>Enter</button>
    </form>


    </div>
  )
}


export default AddBand
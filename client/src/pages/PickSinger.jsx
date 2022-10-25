
import { useState } from "react"



const PickSinger = (props) => {

const [singerChoice , setsingerChoice] = useState([])


let button
if (props.name === '' ){
 button =<button disabled>Next</button>
} else {
  button = <button onClick={props.incrementPage}>Next</button>
}

/*handleChange = (e) => {
setFormState({value: e.target.value})*/







  return(
    <div className="musicianForm">
    
    <br></br>
    <form className="artistForm"  >
    <h2 className="musicianTitle"> Choose your Singer!</h2>
      <div className="inputfield">
      <label> Choose an artist:
        </label>

       <input 
      type = 'text'
      value = {props.name}
      onChange = {props.handleChange}
      placeholder = "Musician Name" />


      <br></br>
      <label> Band Origin:
        </label>

      <span
      type = 'text'
      value = {props.bandOrigin}
      onChange = {props.handleChange}
      placeholder = "Band Origin" />

      <br></br>
      <label> Role:
        </label>
      <input 
      type = 'text'
      value = {props.role}
      onChange = {props.handleChange}
      placeholder = "Role" />
<br></br>

<label> Rating:
        </label>
      <input 
      type = 'text'
      value = {props.rating}
      onChange = {props.handleChange}
      placeholder = "Role" />
      <br></br>
      <br></br>

      </div>

{button}
</form>


    </div>
  )
}


export default PickSinger



   
/*<select  onChange={props.handleChange} name={"name"}>
<option  type = "text " value = {props.name}>Robert Plant
  
</option>
</select>

</label> */
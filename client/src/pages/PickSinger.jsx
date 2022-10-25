
import { useState } from "react"



const PickSinger = (props) => {


  const initialState = {
    name: '',
    bandOrigin: '',
    image: '',
    role: '',
    rating: 0

  }
const[ formState , setFormState] = useState(initialState)


let button 
if (props.name === '' || props.bandOrigin === '' || props.role === ''){
 button =<button disabled>Next</button>
} else {
  button = <button onClick={props.incrementPage}>Next</button>
}

/*handleChange = (e) => {
setFormState({value: e.target.value})*/







  return(
    <div>
    <h2> Choose your Singer!</h2>
    <form  onSubmit={ props.handleSubmit} >
      <label> Choose an artist:
        <select  onChange={props.handleChange} name={"name"}>
          <option value = 'name'>Robert Plant
            
          </option>
        </select>
        

      </label>
    


</form>

{button}
    </div>
  )
}


export default PickSinger



      <input
        type="text"
        name="name"
        placeholder="Your
         Name"
        value={props.name}
        onChange={props.handleChange}
      />
      <br></br>
      <br></br>
      <input
        type="text"
        name="email"
        placeholder="Your Email"
        value={props.email}
        onChange={props.handleChange}
      />
      <br></br>
      <br></br>
      <input
        type="text"
        name="age"
        placeholder="Your Age"
        value={props.age}
        onChange={props.handleChange}
      />

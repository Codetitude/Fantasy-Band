const PickDrummer = (props) => {




  let button 
  if (props.name === '' || props.bandOrigin === '' || props.role === ''){
   button =<button disabled>Next</button>
  } else {
    button = <button onClick={props.incrementPage}>Next</button>
  }
  

// add a handle submit to add the total rating together

  return(
    
      <div className="musicianForm">
    
    <form   className="artistForm" >
    <h2 className="musicianTitle"> Choose your Drummer!</h2>
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

      <input 
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

{button}
</form>
    </div>
  )
}


export default PickDrummer
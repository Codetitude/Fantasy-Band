const Stage = (props) => {


  let button 
  if (props.name === '' || props.bandOrigin === '' || props.role === ''){
   button =<button disabled>Next</button>
  } else {
    button = <button onClick={props.incrementPage}>Next</button>
  }
  
  return(
    <div>
<h1 className="stageTitle"> 
  Introducing : {props.newBand.name}
</h1>

      {button}
    </div>
  )
}


export default Stage
const BandConfirm = (props) => {



  let button 
  if (props.name === '' || props.bandOrigin === '' || props.role === ''){
   button =<button disabled>Next</button>
  } else {
    button = <button onClick={props.incrementPage}>Next</button>
  }
  

  return(
    <div>
      {button}
    </div>
  )
}


export default BandConfirm
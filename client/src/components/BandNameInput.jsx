const BandNameInput = (props) => {

  return (
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
  )
}

export default BandNameInput

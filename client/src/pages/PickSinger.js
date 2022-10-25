import { useEffect, useState } from 'react'
import axios from 'axios'

const PickSinger = (props) => {
  const [singers, setSingers] = useState([])

  useEffect(() => {
    const getSinger = async () => {
      const response = await axios.get(`http://localhost:3001/musicians/list`)
      let singersArray = response.data.musicians.filter((musician) => {
        return musician.role === 'Singer'
      })
      setSingers(singersArray)
    }
    getSinger()
  }, [])

  let button
  if (props.name === '') {
    button = <button disabled>Next</button>
  } else {
    button = <button onClick={props.incrementPage}>Next</button>
  }

  const handleChange = (e) => {
    setSingers(e.target.value)
  }

  return (
    <div className="musicianForm">
      <br></br>
      <form className="artistForm">
        <h2 className="musicianTitle"> Choose your Singer!</h2>
        <div className="inputfield">
          <label> Choose an artist:</label>

          <select>
            <option disabled>Select a singer</option>
            {singers.map((singer) => (
              <option> {singer.name}</option>
            ))}
          </select>
          <br></br>
          <label> Band Origin:</label>

          <span
            type="text"
            value={props.bandOrigin}
            onChange={props.handleChange}
            placeholder="Band Origin"
          />

          <br></br>
          <label> Role:</label>
          <input
            type="text"
            value={props.role}
            onChange={props.handleChange}
            placeholder="Role"
          />
          <br></br>

          <label> Rating:</label>
          <input
            type="text"
            value={props.rating}
            onChange={props.handleChange}
            placeholder="Role"
          />
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

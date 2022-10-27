import { useEffect, useState } from 'react'
import axios from 'axios'

const PickBassist = (props) => {
  const [bassists, setBassists] = useState([])
  const [selectedBassist, setSelectedBassist] = useState('')

  useEffect(() => {
    const getBassist = async () => {
      const response = await axios.get(`http://localhost:3001/musicians/list`)
      let bassistsArray = response.data.musicians.filter((musician) => {
        return musician.role === 'Bassist'
      })
      setBassists(bassistsArray)
    }
    getBassist()
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    let tempBand = { ...props.newBand }
    tempBand.members.push(selectedBassist)
    tempBand.totalRating += selectedBassist.rating

    props.setNewBand(tempBand)

    props.incrementPage()
    console.log(props.newBand.members)
  }

  const handleChange = (e) => {
    const selectedBassist = bassists.find((bassist) => {
      console.log(bassist)
      return bassist.name === e.target.value
    })
    console.log(e.target.value)
    setSelectedBassist(selectedBassist)
  }

  let button
  if (props.name === '') {
    button = <button disabled>Next</button>
  } else {
    button = (
      <button onClick={handleSubmit} type="submit">
        Next
      </button>
    )
  }

  return (
    <div className="musicianForm">
      <br></br>
      <form className="artistForm">
        <h2 className="choose-your-role-title"> Choose your Bassist!</h2>
        <div className="inputfield">
          <label> Choose an artist:</label>

          <select onChange={handleChange}>
            <option disabled selected>
              Select a bassist
            </option>
            {bassists.map((bassist) => (
              <option key={bassist.id} value={bassist.id}>
                {bassist.name}
              </option>
            ))}
          </select>
          <br></br>
          <br></br>
          <label> Band Origin:</label>

          <span> {selectedBassist.bandOrigin}</span>

          <br></br>
          <br></br>
          <label> Role:</label>
          <span>{selectedBassist.role}</span>

          <br></br>
          <br></br>

          <label> Rating:</label>
          <span>{selectedBassist.rating}</span>

          <br></br>
          <br></br>
        </div>

        {button}
      </form>
    </div>
  )
}

export default PickBassist

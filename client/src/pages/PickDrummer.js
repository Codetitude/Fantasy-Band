import { useEffect, useState } from 'react'
import axios from 'axios'

const PickDrummer = (props) => {
  const [drummers, setDrummers] = useState([])
  const [selectedDrummer, setSelectedDrummer] = useState('')

  useEffect(() => {
    const getDrummer = async () => {
      const response = await axios.get(`http://localhost:3001/musicians/list`)
      let drummersArray = response.data.musicians.filter((musician) => {
        return musician.role === 'Drummer'
      })
      setDrummers(drummersArray)
    }
    getDrummer()
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    let tempBand = { ...props.newBand }
    tempBand.members.push(selectedDrummer)
    tempBand.totalRating += selectedDrummer.rating

    props.setNewBand(tempBand)

    props.incrementPage()
    console.log(props.newBand.members)
  }

  const handleChange = (e) => {
    const selectedDrummer = drummers.find((drummer) => {
      console.log(drummer)
      return drummer.name === e.target.value
    })
    console.log(e.target.value)
    setSelectedDrummer(selectedDrummer)
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
        <h2 className="musicianTitle"> Choose your Drummer!</h2>
        <div className="inputfield">
          <label> Choose an artist:</label>

          <select onChange={handleChange}>
            <option disabled selected>
              Select a drummer
            </option>
            {drummers.map((drummer) => (
              <option key={drummer.id} value={drummer.id}>
                {drummer.name}
              </option>
            ))}
          </select>
          <br></br>
          <br></br>
          <label> Band Origin:</label>

          <span> {selectedDrummer.bandOrigin}</span>

          <br></br>
          <br></br>
          <label> Role:</label>
          <span>{selectedDrummer.role}</span>

          <br></br>
          <br></br>

          <label> Rating:</label>
          <span>{selectedDrummer.rating}</span>

          <br></br>
          <br></br>
        </div>

        {button}
      </form>
    </div>
  )
}

export default PickDrummer

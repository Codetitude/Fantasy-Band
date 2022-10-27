import { useEffect, useState } from 'react'
import axios from 'axios'

const PickSinger = (props) => {
  const [singers, setSingers] = useState([])
  const [selectedSinger, setSelectedSinger] = useState('')

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

  const handleSubmit = (e) => {
    e.preventDefault()
    let tempBand = { ...props.newBand }
    tempBand.members.push(selectedSinger)
    tempBand.totalRating += selectedSinger.rating

    props.setNewBand(tempBand)

    props.incrementPage()
    console.log(props.newBand.members)
  }

  const handleChange = (e) => {
    const selectedSinger = singers.find((singer) => {
      console.log(singer)
      return singer.name === e.target.value
    })
    console.log(e.target.value)
    setSelectedSinger(selectedSinger)
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
        <h2 className="choose-your-role-title"> Choose your Singer!</h2>
        <div className="inputfield">
          <label> Choose an artist:</label>

          <select onChange={handleChange}>
            <option disabled selected>
              Select a singer
            </option>
            {singers.map((singer) => (
              <option key={singer.id} value={singer.id}>
                {singer.name}
              </option>
            ))}
          </select>
          <br></br>
          <br></br>
          <label> Band Origin:</label>

          <span> {selectedSinger.bandOrigin}</span>

          <br></br>
          <br></br>
          <label> Role:</label>
          <span>{selectedSinger.role}</span>

          <br></br>
          <br></br>

          <label> Rating:</label>
          <span>{selectedSinger.rating}</span>

          <br></br>
          <br></br>
        </div>

        {button}
      </form>
    </div>
  )
}

export default PickSinger

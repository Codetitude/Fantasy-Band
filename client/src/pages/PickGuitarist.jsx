
import { useEffect, useState } from 'react'
import axios from 'axios'


const PickGuitarist = (props) => {

    const [guitarists, setGuitarists] = useState([])
    const [selectedGuitarist, setSelectedGuitarist] = useState('')
  
    useEffect(() => {
      const getGuitarist = async () => {
        const response = await axios.get(`/musicians/list`)
        let guitaristsArray = response.data.musicians.filter((musician) => {
          return musician.role === 'Guitarist'
        })
        setGuitarists(guitaristsArray)
        
      }
      getGuitarist()
    }, [])


    const handleSubmit = (e) => {
      e.preventDefault()
      let tempBand = { ...props.newBand }
      tempBand.members.push(selectedGuitarist)
      tempBand.totalRating += selectedGuitarist.rating
  
      props.setNewBand(tempBand)
  
      props.incrementPage()
      console.log(props.newBand.members)
    }
  



    const handleChange = (e) => {
      const selectedGuitarist = guitarists.find((guitarist) => {
        console.log(guitarist)
        return guitarist.name === e.target.value
      })
      console.log(e.target.value)
      setSelectedGuitarist(selectedGuitarist)
    }

    



  
    let button
    if (props.name === '') {
      button = <button disabled>Next</button>
    } else {
      button = <button  className="musicianButton" onClick={handleSubmit} type = "submit">Next</button>
    }
  
    return (
      <div className="musicianPage ">
        <br></br>
        <div className="musicianForm" >
          <h2 className="choose-your-role-title"> Choose a Guitarist!</h2>
          <div className="inputfield">
            <label> Choose an artist:</label>
  
            <select
              onChange={handleChange}
          
            >
              <option disabled selected>
                Select a guitarist
              </option>
              {guitarists.map((guitarist) => (
                <option key={guitarist.id} value={guitarist.id}>
                  {guitarist.name}
                </option>
              ))}
            </select>
            <br></br>
            <br></br>
            <label> Band Origin:</label>
  
            <span> {selectedGuitarist.bandOrigin}</span>
  
            <br></br>
            <br></br>
            <label> Role:</label>
            <span>{selectedGuitarist.role}</span>
  
            <br></br>
            <br></br>
  
            <label> Rating:</label>
            <span>{selectedGuitarist.rating}</span>
  
            <br></br>
            <br></br>
          </div>
  
          {button}

          </div>
       
        <div>
        <img src="https://i.imgur.com/8r4QkTul.jpg" alt="guitarist" />
      </div>
      </div>
    )
  }


export default PickGuitarist
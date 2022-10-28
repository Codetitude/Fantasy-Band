import { useState } from 'react'

const AddBand = (props) => {
  const [bandName, setBandName] = useState('')

  const handleChange = (e) => {
    setBandName(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    props.setNewBand({ ...props.newBand, name: bandName })
    props.incrementPage()
    console.log(props.newBand)
  }

  return (
    <div className="frontpage-field">
      <h1 className="hometitle">Fantasy Band </h1>

      <img
        className="Guitar"
        alt="cover"
        src="https://i.imgur.com/lT4wWacl.png"
      />
      <br></br>
      <section className="frontpageinputs">
        <input
          autocomplete="off"
          type="text"
          name="search"
          value={props.bandName}
          placeholder="Give your band a name!"
          onChange={handleChange}
        ></input>
        <button
          onClick={handleSubmit}
          disabled={bandName === '' ? true : false}
        >
          Enter
        </button>
      </section>
    </div>
  )
}

export default AddBand

import { useEffect} from 'react'
import axios from 'axios'



const BandConfirm = (props) => {


const submitForm = () => {
  const res = axios.post(`http://localhost:3001/musicians/newband`, props.newBand)
  props.incrementPage()
  console.log(res.data.band._id)
  

}




  let button 
  if (props.newBand.name === '' ){
   button =<button disabled>Submit</button>
  } else {
    button = <button onClick={submitForm}>Submit</button>
  }
  
  console.log(props.newBand.members[0].name)

  return(
    <div className="totalConfirmPage">
<section className="BandConfirmTitle">
<h1 className="bandNameConfirmPage"> {props.newBand.name}</h1>
<div className="totalRating">  Rating Score <br></br>{props.newBand.totalRating}</div>
</section>


<div className="musicianDisplay"> 
<section className="bandConfirmPanel">
<img
className="profilePic"
alt="Singer"
src= "https://i.imgur.com/xQMMX4Qt.jpg"
/>
<br></br>

  <span >{props.newBand.members[0].name}</span> 
  <br></br>


</section>

<section className="bandConfirmPanel">

<img
className="profilePic"
alt="Guitarist"
src= "https://i.imgur.com/ZKwrt5Ft.jpg"
/>

</section>



<section className="bandConfirmPanel">
<img
className="profilePic"
alt="Bassist"
src= "https://i.imgur.com/NRomNQmt.jpg"/>

</section>



<section className="bandConfirmPanel">
<img
className="profilePic"
alt="Drummer"
src= "https://i.imgur.com/MGvYNo8t.jpg"
/>

</section>
</div>

      {button}
    </div>
  )
}


export default BandConfirm
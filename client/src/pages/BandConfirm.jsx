const BandConfirm = (props) => {



  let button 
  if (props.name === '' || props.bandOrigin === '' || props.role === ''){
   button =<button disabled>Next</button>
  } else {
    button = <button onClick={props.incrementPage}>Next</button>
  }
  

  return(
    <div>

<h1 className="bandNameConfirmPage"> {props.newBand.name}</h1>
<div> {props.newBand.totalRating}</div>
<section className="bandConfirmPanel">
<img
className="profilePic"
alt="Singer"
src= "https://i.imgur.com/xQMMX4Qt.jpg"
/>

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


      {button}
    </div>
  )
}


export default BandConfirm
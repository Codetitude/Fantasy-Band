const Stage = (props) => {


 
  return(
    <div
    className="stage">
<h1 className="stageTitle"> 
  Introducing : {props.newBand.name}!
</h1>
<img src = 'https://i.imgur.com/oHuHAHDh.jpg' alt ='band' />
      
      <section className="members">
      <div className="totalRating">  Rating Score <br></br>{props.newBand.totalRating}</div>
      <span >Singer: &nbsp;{props.newBand.members[0].name}</span>
      <br></br>
      <span >Guitarist:&nbsp;{props.newBand.members[1].name}</span>
      <br></br>
      <span >Bassist:&nbsp;{props.newBand.members[2].name}</span>
      <br></br>
      <span >Drummer:&nbsp;{props.newBand.members[3].name}</span>
      
      </section>
    </div>
  )
}


export default Stage
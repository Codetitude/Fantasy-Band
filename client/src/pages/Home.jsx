import AddBand from "./AddBand";
import PickSinger from "./PickSinger";
import PickGuitarist from "./PickGuitarist";
import PickBassist from "./PickBassist";
import PickDrummer from "./PickDrummer";
import BandConfirm from "./BandConfirm";
import Stage from "./Stage";


const Home = (props) => {
 

  let page = 0

  switch (props.currentPage) {
    case 0:
      page = <AddBand setNewBand={props.setNewBand} incrementPage={props.incrementPage}  newBand = {props.newBand}/>
      break
    case 1:
      page = <PickSinger setNewBand={props.setNewBand}  incrementPage={props.incrementPage}  newBand = {props.newBand}
      newMember={props.newMember} setNewMember={props.setNewMember} />
      break
    case 2:
      page = <PickGuitarist   setNewBand={props.setNewBand}  incrementPage={props.incrementPage} newBand = {props.newBand} />
      break
    case 3:
      page = <PickBassist  setNewBand={props.setNewBand}  incrementPage={props.incrementPage} newBand = {props.newBand} />
      break
    case 4:
      page = <PickDrummer setNewBand={props.setNewBand}  incrementPage={props.incrementPage}  newBand = {props.newBand} />
      break
   
    case 5:
      page = <BandConfirm setNewBand={props.setNewBand}  incrementPage={props.incrementPage}  newBand = {props.newBand} />
      break

      case 6:
        page = <Stage setNewBand={props.setNewBand}  incrementPage={props.incrementPage}  newBand = {props.newBand} />
        break

    default:

  }

  return (
    <div className="home">
    
      {page}
    </div>
  )
}

export default Home
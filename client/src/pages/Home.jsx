import AddBand from "./AddBand";
import PickSinger from "./PickSinger";
import PickGuitarist from "./PickGuitarist";
import PickBassist from "./PickBassist";
import PickDrummer from "./PickDrummer";
import BandConfirm from "./BandConfirm";
import Stage from "./Stage";


const Home = (props) => {
  // Most all of your work for this lab will be done here in the HomePage component.

  // Set up conditional rendering below to determine which component to show on our home page!

  let page = 0

  switch (props.currentPage) {
    case 0:
      page = <AddBand incrementPage={props.incrementPage} />
      break
    case 1:
      page = <PickSinger handleChange={props.handleChange}  incrementPage={props.incrementPage}  />
      break
    case 2:
      page = <PickGuitarist   handleChange={props.handleChange}  incrementPage={props.incrementPage} />
      break
    case 3:
      page = <PickBassist  handleChange={props.handleChange}  incrementPage={props.incrementPage}  />
      break
    case 4:
      page = <PickDrummer handleChange={props.handleChange}  incrementPage={props.incrementPage}  />
      break
    case 5:
      page = <BandConfirm  handleChange={props.handleChange}  incrementPage={props.incrementPage}  />
      break
    case 6:
      page = <Stage handleChange={props.handleChange}  incrementPage={props.incrementPage} />
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
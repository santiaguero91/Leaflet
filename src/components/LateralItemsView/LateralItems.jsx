import { useSelector } from "react-redux";
import "../../App.css"
import { LateralItemsDiv, MarkersNamesDiv } from "./LateralItemsStyle";


function LateralItems() {
    const allMarkers = useSelector((state) => state.markers);
    
function ver() {
    console.log(allMarkers);
}

    return (
<LateralItemsDiv
initial={{ width: 0 }}
animate={{ width: "30vw"  , transition: { duration: 0.8 } }}
exit={{ width: 0, duration: 0.8 }}
>
<h2>MarkersNames</h2>
<MarkersNamesDiv>
    <button onClick={()=> ver()}>VER</button>
{allMarkers.map((el) => {
    return(
    <div>
    <p>{el.name}</p>
    </div>
    )
    
})}
</MarkersNamesDiv>
</LateralItemsDiv>

    )
}

export default LateralItems;



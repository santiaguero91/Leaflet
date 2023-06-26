import { useSelector } from "react-redux";
import "../../App.css"
import { LateralItemsDiv } from "./LateralItemsStyle";


function LateralItems() {
    const allMarkers = useSelector((state) => state.markers);
    
    return (
<LateralItemsDiv>
{allMarkers.map((el) => {
    <div>
        <p>{el.name}</p>
    </div>
})}
</LateralItemsDiv>

    )
}

export default LateralItems;
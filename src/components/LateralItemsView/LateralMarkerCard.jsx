import "../../App.css"
import { CardDiv } from "./LateralMarkerCardStyle";


function LateralMarkerCard(key,id, name, lat, lng ) {
    
    return (
<CardDiv>
    <h5>{name}</h5>
</CardDiv>
    )
}

export default LateralMarkerCard;
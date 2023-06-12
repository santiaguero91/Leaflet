

import './App.css'

function Filtro() {
    const allMarkers = useSelector((state) => state.markers);

  return (
    <>
    <h2>Filtro</h2>
    {allMarkers.map((el) => {
              return (
                <Marker
                  position={{
                    lat: el.latitude,
                    lng: el.longitude,
                  }}
                  key={el.id}
                >
                  <Popup key={el.id}>
                    {el.name}

                    {el.link && <a href={el.link}>{el.name}</a>}
                  </Popup>
                </Marker>
              );
            })}
    </>
  )
}

export default Filtro
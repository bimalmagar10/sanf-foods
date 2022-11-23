import { MapContainer, TileLayer,Marker,Popup ,useMap} from 'react-leaflet';
function MarkerWrapper ({latitude,longitude,facilitytype,locationdescription}){
	const map = useMap();
	return (
		<Marker 
		    eventHandlers={{
		    	click:() => {
		    		map.setView([
		    			latitude,
		    			longitude
		    		],15);
		    	}
		    }}
		    position={[latitude,longitude]}
		  >
		    <Popup>

		      {`Available ${facilitytype} in ${locationdescription}`}
		    </Popup>
		</Marker>
	);
};

const ContainerMap = ({foods}) => {
	return (
		<MapContainer center={[37.718745999999996,-122.43471492790698]} zoom={5} scrollWheelZoom={true}>
			  <TileLayer
			    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
		      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
			  />
			 {
			 	foods.length && foods.map(food => (
			 		<MarkerWrapper
			 		    key={food.objectid} 
			 			latitude={food.latitude}
			 			longitude={food.longitude}
			 			facilitytype={food.facilitytype}
			 			locationdescription={food.locationdescription}
			 		/>
			 	))
			 }
		</MapContainer>
	);
};

export default ContainerMap;
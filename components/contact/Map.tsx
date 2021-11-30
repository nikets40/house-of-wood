import { useState } from "react";
import ReactMapGL, { InteractiveMapProps, Marker } from "react-map-gl";
import { LocationMarkerIcon } from "@heroicons/react/solid";

const Map: React.FC<{className: string}> = ({className}) => {
  const [viewport, setViewport] = useState<InteractiveMapProps>({
    width: "100%",
    height: "100%",
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 8,
  });
  return (
   <div className={className}>
      <ReactMapGL
      className="rounded-2xl shadow-xl"
      mapStyle="mapbox://styles/nikets40/ckwlnaahc5by315p2wsg6wzf1"
      mapboxApiAccessToken={process.env.mapbox_key}
      {...viewport}
      onViewportChange={(nextViewPort) => {
        setViewport({ ...nextViewPort, width: "fit" });
      }}
    >
      <Marker latitude={37.7577} longitude={-122.4376}>
        <LocationMarkerIcon className="w-12 h-12 text-primary animate-bounce" />
      </Marker>
    </ReactMapGL>
   </div>
  );
};

export default Map;

import { useState, useEffect, useRef, useCallback } from "react";
import ReactMapGL, { Marker } from "react-map-gl";
import renderCategoryIcon from "../methods/renderCategoryIcon";
import "mapbox-gl/dist/mapbox-gl.css";

const CatchmentMap = (props) => {
  const { org } = props;

  const MAPBOX_TOKEN = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;

  const [viewport, setViewport] = useState({
    latitude: org?.venue?.geopoint?.lat || 51.536388,
    longitude: org?.venue?.geopoint?.lon || -0.140556,
    zoom: org?.venue?.geopoint?.lat ? 13 : 11,
    transitionDuration: 1000,
  });

  const mapNode = useRef(null);
  const [mapLoaded, setMapLoaded] = useState(false);

  const categoryName = org?.offering[0];
  const isMarker = "true";

  const COLORS = ["#3047EC"];
  const randomColor = COLORS[Math.floor(Math.random() * COLORS.length)];

  useEffect(() => {
    if (mapLoaded) {
      addCatchmentArea();
    }
  }, [mapLoaded]);

  const addCatchmentArea = useCallback(() => {
    try {
      if (org?.catchmentArea) {
        const map = mapNode.current.getMap();
        map.addSource("catchmentArea-GEOJSON-SOURCE", {
          type: "geojson",
          data: {
            type: "Feature",
            geometry: org?.catchmentArea,
          },
        });
        map.addLayer({
          id: "catchmentArea-LAYER-FILL",
          type: "fill",
          source: "catchmentArea-GEOJSON-SOURCE",
          layout: { visibility: "visible" },
          paint: {
            "fill-color": randomColor,
            "fill-opacity": 0.2,
          },
        });
        map.addLayer({
          id: "catchmentArea-GEOJSON-LAYER-LINE",
          type: "line",
          source: "catchmentArea-GEOJSON-SOURCE",
          paint: {
            "line-color": randomColor,
          },
        });
      }
    } catch (e) {
      console.log(e);
    }
  }, [mapNode]);

  return (
    <div className="relative w-full h-full">
      <ReactMapGL
        ref={mapNode}
        {...viewport}
        onLoad={() => setMapLoaded(true)}
        width="100%"
        height="100%"
        mapboxApiAccessToken={MAPBOX_TOKEN}
        mapStyle="mapbox://styles/mapbox/streets-v9"
        onViewportChange={(value) => setViewport(value)}
      >
        {org?.venue?.geopoint && (
          <Marker
            latitude={org?.venue?.geopoint?.lat}
            longitude={org?.venue?.geopoint?.lon}
            key="you"
            offsetLeft={-8}
            offsetTop={-8}
          >
            <div className="">
              {renderCategoryIcon({ categoryName, isMarker, org })}
            </div>
          </Marker>
        )}
      </ReactMapGL>
    </div>
  );
};

export default CatchmentMap;

import { Marker } from "react-map-gl";
import renderCategoryIcon from "../methods/renderCategoryIcon";
import PropTypes from "prop-types";
import scrollToTop from "../methods/scrollToTop";

const handleMarkerClick = ({ org, setFocusedVenue }) => {
  setFocusedVenue(org);
  scrollToTop();
};

const Markers = (props) => {
  const { markers, setFocusedVenue, categoryFilter } = props;
  const isMarker = true;

  let filteredMarkers;
  if (categoryFilter) {
    filteredMarkers = markers.filter(
      (marker) => marker.offering && marker.offering?.includes(categoryFilter)
    );
  } else {
    filteredMarkers = markers;
  }

  return filteredMarkers.map((org, index) => {
    const categoryName = categoryFilter || null;

    return (
      org.venue?.geopoint && (
        <Marker
          key={`marker-${index}`}
          offsetLeft={-12.9875}
          offsetTop={-32}
          longitude={org.venue?.geopoint?.lon}
          latitude={org.venue?.geopoint?.lat}
        >
          <div onClick={() => handleMarkerClick({ org, setFocusedVenue })}>
            {renderCategoryIcon({ categoryName, isMarker, org })}
          </div>
        </Marker>
      )
    );
  });
};

Markers.propTypes = {
  markers: PropTypes.arrayOf(PropTypes.object).isRequired,
  setFocusedVenue: PropTypes.func.isRequired,
  categoryFilter: PropTypes.string,
};

export default Markers;

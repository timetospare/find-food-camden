import recordLocationSearch from "../methods/recordLocationSearch";

const getUserLocation = (returnFunction) => {
  const showPosition = (position) => {

    const { coords } = position;

    recordLocationSearch({
      latitude: coords.latitude,
      longitude: coords.longitude,
    });

    returnFunction(coords);
  };

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    return { err: { message: "User location is not supported" } };
  }
};

export default getUserLocation;

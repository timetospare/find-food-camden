const fetchPoints = (latLon) => {
  return fetch("/api/points", {
    method: "POST",
    body: JSON.stringify({ geopoint: latLon }),
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => data.hits.hits);
};

export default fetchPoints;

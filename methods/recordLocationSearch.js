import { v4 as uuidv4 } from "uuid";

const indexSearch = (body) => {
  return fetch("/api/analytics", {
    method: "POST",
    headers: { Accept: "application/json" },
    body: JSON.stringify(body),
  });
};

const recordLocationSearch = async (location) => {
  const now = new Date();
  const date = now.toISOString();
  const { latitude, longitude } = location;
  const geopoint = { lat: latitude, lon: longitude };

  if (localStorage.getItem("uuid")) {
    await indexSearch({
      geopoint,
      date,
      uuid: localStorage.getItem("uuid"),
    });
  } else {
    const uuid = uuidv4();
    localStorage.setItem("uuid", uuid);

    await indexSearch({
      geopoint,
      date,
      uuid,
    });
  }
};

export default recordLocationSearch;

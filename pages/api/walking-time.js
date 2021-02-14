const API_URL = "https://api.traveltimeapp.com/v4/time-filter";
const API_KEY = process.env.TRAVELTIME_API_KEY; // should be an env var
const APP_ID = process.env.TRAVELTIME_APP_ID;

export default async (req, res) => {
  const result = await fetch(API_URL, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "X-Api-Key": API_KEY,
      "Content-Type": "application/json",
      "X-Application-Id": APP_ID,
    },
    body: JSON.stringify({
      locations: [
        {
          id: "user",
          coords: req.body.coords,
        },
        ...req.body.otherLocations,
      ],
      departure_searches: [
        {
          id: "forward search example",
          departure_location_id: "user",
          arrival_location_ids: req.body.otherLocations.map((org) => org.id),
          transportation: {
            type: "walking",
          },
          departure_time: "2020-11-26T08:00:00Z",
          travel_time: 3600,
          properties: ["travel_time"],
          range: {
            enabled: true,
            max_results: 3,
            width: 600,
          },
        },
      ],
    }),
  });

  const response = await result.json();

  res.json(response);
};

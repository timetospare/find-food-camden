import { useState, useEffect } from "react";
import Head from "next/head";
import CategoriesFilter from "../components/CategoriesFilter";
import Map from "../components/Map";
import categories from "../models/categories";
import fetchPoints from "../methods/fetchPoints";
import VenueCards from "../components/VenueCards";
import NavBar from "../components/NavBar";
import Loading from "../components/Loading";

export default function Index() {
  const allCategories = categories.map(
    (category) => Object.values(category)[0]
  );
  const [categoryFilter, setCategoryFilter] = useState(null);
  const [categoryClicked, setCategoryClicked] = useState("");
  const [focusedVenue, setFocusedVenue] = useState(null);
  const [venuesLoading, setVenuesLoading] = useState(true);

  const [scroll, setScroll] = useState(0);

  const handleScroll = () => {
    if (window.innerWidth < 768) {
      const currentScrollY = window.scrollY;

      if (window.innerHeight / 2 - currentScrollY > 200) {
        setScroll(currentScrollY);
      }
    }

    //setScroll(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [venues, setVenues] = useState([]);

  const [latLon, setLatLon] = useState({
    latitude: 51.536388,
    longitude: -0.140556,
  });
  const [travelTime, setTravelTime] = useState({});
  useEffect(() => {
    if (latLon) {
      fetch("/api/walking-time?", {
        method: "POST",
        body: JSON.stringify({
          coords: {
            lat: latLon.latitude,
            lng: latLon.longitude,
          },
          otherLocations: venues
            .filter((item) => item.venue?.geopoint)
            .map((org) => ({
              id: org._id,
              coords: {
                lat: org.venue.geopoint.lat,
                lng: org.venue.geopoint.lon,
              },
            })),
        }),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          setTravelTime(data.results?.[0]);
        });
    }
  }, [venues]);

  useEffect(() => {
    if (latLon) {
      fetchPoints(latLon).then((points) => {
        setVenues(
          points.map((point) => ({
            ...point._source,
            _score: point._score,
            _id: point._id,
          }))
        );
      });
    }
  }, [latLon]);

  return (
    <div className="page-container">
      <Head>
        <title>Map - Find Food Support in Camden</title>
        <meta
          name="description"
          content="Find food support in your local community. Discover the support available near you in Camden."
        />
        <meta
          property="og:url"
          content="https://findfood.camden.gov.uk/camden-food"
        />
        <meta property="og:title" content="Map - Find Food Support in Camden" />
        <meta
          property="og:description"
          content="Find food support in your local community. Discover the support available near you in Camden."
        />
        <meta
          property="twitter:title"
          content="Map - Find Food Support in Camden"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:image"
          content="https://i.ibb.co/HDff9SP/find-food-twitter.png"
        />
        <meta
          property="og:image"
          content="https://i.ibb.co/HDff9SP/find-food-twitter.png"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
      </Head>

      <NavBar className="h-10 md:h-16 absolute md:fixed top-0 py-5" />
      <div
        style={{ height: `calc(50vh - ${scroll}px` }}
        className="map-container fixed z-40 h-96 flex flex-col items-center w-screen lg:w-50vw lg:h-screen top-0 lg:pt-16 right-0"
      >
        <Map
          markers={venues}
          focusedVenue={focusedVenue}
          setFocusedVenue={(venue) => setFocusedVenue(venue)}
          onFocusedLocationChange={(value) => setLatLon(value)}
          categoryFilter={categoryFilter}
          categoryClicked={categoryClicked}
          defaultViewport={{
            ...latLon,
            zoom: 11,
            transitionDuration: 1000,
          }}
        />
        <div className="flex flex-col top-0 mt-12 md:mt-20 lg:mt-0 lg:pt-20 lg:ml-m100vw absolute w-full items-center">
          <CategoriesFilter
            categoryFilter={categoryFilter}
            setCategoryFilter={setCategoryFilter}
            allCategories={allCategories}
            categoryClicked={categoryClicked}
            setCategoryClicked={setCategoryClicked}
          />
        </div>
      </div>
      <main className="main mt-55vh pt-3 lg:pt-0 lg:px-8  bg-white lg:mt-40 lg:w-1/2  flex flex-col">
        {categoryFilter && !focusedVenue && (
          <p className="-mt-12 lg:mt-1 text-sm p-1 px-2 bg-blue-100 border rounded-lg border-blue-300 text-gray-700">
            Please use these categories as a guide. These organisations are
            charities so the food on offer will change depending on funding and
            availability
          </p>
        )}
        <hr className="hidden lg:block my-3 border border-gray-300 w-full self-center" />
        <h1 className="text-3xl hidden lg:block font-extrabold">
          Food available in Camden
        </h1>
        {!venues ||
          (venues.length === 0 && (
            <div className="flex justify-center w-full p-6">
              <Loading fillColor="#3047EC" />
            </div>
          ))}
        <VenueCards
          orgModel={venues}
          focusedVenue={focusedVenue}
          travelTime={travelTime}
          setFocusedVenue={(venue) => setFocusedVenue(venue)}
          categoryFilter={categoryFilter}
        />
      </main>

      <footer className="p-3 pt-5 text-center lg:text-left lg:pl-8">
        <a
          className="text-xs flex flex-no-wrap justify-center items-center lg:justify-start"
          href="https://timetospare.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span>
            <img
              src="/time-to-spare-logo.svg"
              alt="time to spare"
              className="h-5 ml-1"
            />
          </span>
        </a>
      </footer>
    </div>
  );
}

import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import ReactMapGL, { Marker } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import Markers from "./Markers";
import PostcodeAutocomplete from "./PostcodeAutocomplete";
import getUserLocation from "./UserLocation";
import Router from "next/router";
import orgModel from "../models/orgModel";
import Notifications from "./Notifications";
import Modal from "../components/Modal";

const MAPBOX_TOKEN = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;

const Map = (props) => {
  const {
    focusedVenue,
    setFocusedVenue,
    onFocusedLocationChange,
    categoryFilter,
    defaultViewport,
  } = props;

  // Camden
  const DEFAULT_VIEWPORT = defaultViewport;

  const [viewport, setViewport] = useState(DEFAULT_VIEWPORT);
  const [latLon, setLatLon] = useState({});
  const [outsideBoroughModal, setOutsideBoroughModal] = useState(false);

  useEffect(() => {
    focusedVenue
      ? setViewport({
          latitude: focusedVenue.venue?.geopoint?.lat,
          longitude: focusedVenue.venue?.geopoint?.lon,
          zoom: 14,
          transitionDuration: 500,
        })
      : setViewport(DEFAULT_VIEWPORT); // if we want to reset viewport to default on click
  }, [focusedVenue]);

  useEffect(() => {
    if (latLon.latitude) {
      const newViewport = { ...latLon, transitionDuration: 500, zoom: 12 };
      setViewport(newViewport);
      setFocusedVenue(null);
      //fetchPoints();
    }
  }, [latLon]);

  const [markerForYou, setMarkerForYou] = useState(null);

  useEffect(() => {
    onFocusedLocationChange(markerForYou);
    if (markerForYou) {
      Router.push(
        `/camden-food?lat=${markerForYou.latitude}&lon=${markerForYou.longitude}`
      );
    }
  }, [markerForYou]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (Router?.query?.lat && Router?.query?.lon) {
        const coords = {
          latitude: Number(Router.query.lat),
          longitude: Number(Router.query.lon),
        };
        setViewport({
          ...viewport,
          zoom: 12,
          transitionDuration: 500,
          ...coords,
        });
        setMarkerForYou(coords);
      } else {
        navigator.permissions
          ?.query({ name: "geolocation" })
          .then((permission) => {
            if (permission.state === "granted") {
              getUserLocation((coords) => {
                setViewport({
                  ...viewport,
                  zoom: 12,
                  transitionDuration: 500,
                  latitude: coords.latitude,
                  longitude: coords.longitude,
                });
                setMarkerForYou({
                  latitude: coords.latitude,
                  longitude: coords.longitude,
                });
              });
            }
          });
      }
    }
  }, [typeof window]);

  const [notificationList, setNotificationList] = useState([]);
  useEffect(() => {
    if (categoryFilter) {
      setNotificationList([`${categoryFilter}`]);
    }
  }, [categoryFilter]);

  useEffect(() => {
    if (Router?.query?.district) {
      setOutsideBoroughModal(
        Router?.query?.district !== "E09000007" ? true : false
      );
    }
  }, []);

  return (
    <div className="relative w-full h-full">
      <Notifications list={notificationList} className="z-50" />
      {outsideBoroughModal && (
        <Modal
          id="outsideBorough"
          isOpen={outsideBoroughModal}
          onClose={() => {
            setOutsideBoroughModal(false);
          }}
          closeLabel="OK"
        >
          {
            <div className="space-y-4 flex flex-col text-lg">
              <p className="flex flex-col md:flex-row items-center">
                <span className="mr-3">
                  <img
                    src="/icons/info.svg"
                    className="h-8 md:h-12 lg:h-8 mb-4 mr-3 md:mb-0"
                    alt="info icon"
                  />
                </span>
                {/* The postcode you entered is not in Camden.
              </p>
              <p>
                {' '} */}
                Organisations listed here are based in the London Borough of
                Camden.
              </p>
              <p>
                If you live in London you can find{" "}
                {
                  <a
                    href="https://covidcommunitycampaign.co.uk/local-support/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="underline cursor-pointer text-indigo-600 hover:text-indigo-700">
                      local food support by borough
                    </span>
                  </a>
                }
                , or alternatively contact your local council for support
                available in your area.
              </p>
            </div>
          }
        </Modal>
      )}
      <ReactMapGL
        {...viewport}
        width="100%"
        height="100%"
        mapboxApiAccessToken={MAPBOX_TOKEN}
        mapStyle="mapbox://styles/mapbox/streets-v9"
        onViewportChange={(value) => setViewport(value)}
        // onResize={onResize}
        // onError={onError}
      >
        <Markers {...props} />
        {markerForYou?.latitude && markerForYou?.longitude && (
          <Marker
            latitude={markerForYou.latitude}
            longitude={markerForYou.longitude}
            key="you"
            offsetLeft={-8}
            offsetTop={-8}
          >
            <div className="h-4 w-4 you-marker rounded-full" />
          </Marker>
        )}
      </ReactMapGL>

      <div className="w-full flex lg:justify-center items-center">
        <div
          className={`postcode-rounded-container flex flex-col lg:justify-center items-center relative lg:absolute w-screen lg:w-6/12 xl:w-4/12 z-50 bg-white -mt-8 lg:mt-4 lg:py-2 lg:top-0 rounded-3xl rounded-b-none lg:rounded-2xl lg:shadow`}
        >
          <p className=" absolute top-0 mt-1 px-1 hidden lg:block text-sm text-gray-700">
            Enter a postcode (e.g. N1C 4AG)
          </p>
          <div className="m-2 mt-4 mb-1 lg:mt-5">
            <PostcodeAutocomplete
              onLookUp={(xy) => {
                setLatLon(xy);
                setMarkerForYou(xy);
                setOutsideBoroughModal(
                  xy.adminDistrict && xy.adminDistrict !== "E09000007"
                    ? true
                    : false
                );
              }}
              onMap
              {...props}
              placeholder="e.g. N1C 4AG"
            />
          </div>
        </div>
      </div>

      <style jsx global>
        {`
          .you-marker {
            background: radial-gradient(
              50% 50% at 5% 0%,
              #ffffff 0%,
              #007ff4 100%
            );
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
          }
        `}
      </style>
    </div>
  );
};

Map.propTypes = {
  focusedVenue: PropTypes.object,
};

export default Map;

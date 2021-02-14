import { useState } from "react";
import OpenDays from "../../components/OpenDays";
import OrgCategories from "../../components/OrgCategories";
import NavBar from "../../components/NavBar";
import fetchProfile from "../api/profile";
import VenueCarousel from "../../components/VenueCarousel";
import defaultCoverPhoto from "../../models/defaultCoverPhotos";
import { useEffect } from "react";
import fetchPoints from "../../methods/fetchPoints";
import PostcodeAutocomplete from "../../components/PostcodeAutocomplete";
import CatchmentMap from "../../components/CatchmentMap";
import BetaBanner from "../../components/BetaBanner";
import OpenHours from "../../components/OpenHours";
import booleanPointInPolygon from "@turf/boolean-point-in-polygon";
import { point, polygon } from "@turf/helpers";
import CTAButtons from "../../components/CTAButtons";
import Modal from "../../components/Modal";
import Link from "next/link";
import Head from "next/head";

const Profile = (props) => {
  const { org, id } = props;
  const [catchmentCheckVisible, setCatchmentCheckVisible] = useState(false);
  const [
    referralRequestModalVisible,
    setReferralRequestModalVisible,
  ] = useState(false);
  const [isInArea, setIsInArea] = useState(false);
  const [showCatchmentInfo, setShowCatchmentInfo] = useState(false);
  const nameGoogleParam = org?.name?.replace(/-/g, "+");

  const chipTextStyle = `text-black text-sm sm:text-base inline-flex items-center`;

  const referralCTA = org?.cta?.find(
    (cta) => cta?.type === "request-a-referral"
  );

  const chipsExist =
    org?.offering?.includes("Free service") ||
    org?.referralRequired ||
    org?.cta?.find((cta) => cta.type === "book-online") ||
    org?.cta?.find((cta) => cta.type === "book-by-phone") ||
    org?.cta?.find((cta) => cta.type === "turn-up");

  useEffect(() => {
    if (org?.venue?.geopoint) {
      fetchPoints(org.venue.geopoint).then((points) => {});
    }
  }, [org?.venue?.geopoint]);

  const handleCatchmentAreaCheck = (value) => {
    if (value) {
      const catchmentPolygon = polygon([org?.catchmentArea.coordinates[0]]);
      const orgPoint = point([value.longitude, value.latitude]);
      setIsInArea(booleanPointInPolygon(orgPoint, catchmentPolygon));

      setReferralRequestModalVisible(true);
    }
  };

  return (
    <>
      <Head>
        <title>
          {org?.tag} at {org?.name} - Find Food Support in Camden{" "}
        </title>
        <meta
          name="description"
          content="Find Food has been developed by Camden Council and Time to Spare to help the residents of Camden find food and support in times of need"
        />
      </Head>
      <BetaBanner />
      <NavBar className="h-10 md:h-16 py-6 " />
      <img
        src={org?.coverPhoto || defaultCoverPhoto(2)}
        alt=""
        className="w-screen h-32 sm:h-64 object-cover z-0"
      />
      <div className="flex flex-col justify-center items-center">
        <div className="profile relative -mt-2 sm:-mt-20 md:-mt-32 flex flex-col bg-white w-screen sm:w-10/12 md:w-10/12 lg:w-9/12 xl:w-8/12 rounded-lg p-4 md:px-8 md:py-6">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-8/12 flex flex-col">
              <h1 className="text-xl md:text-3xl  m-0 font-extrabold">
                {org?.tag}
              </h1>
              <h2 className={`text-xl  m-0 md:pb-4 text-gray-700`}>
                {org?.name}
              </h2>

              {org && <OrgCategories org={org} names />}
              {org && (
                <p className="text-sm p-1 mt-4 -mb-2 bg-blue-100 border rounded-lg border-blue-300 text-gray-700 ">
                  Please use these categories as a guide. These organisations
                  are charities so the food on offer will change depending on
                  funding and availability
                </p>
              )}

              <hr className="mt-4 md:mt-8 border border-gray-300" />

              <div className="flex flex-col justify-center h-full py-2">
                <p className="md:text-xl text-gray-800">{org?.description}</p>

                {chipsExist && (
                  <div className="chips flex text-black text-sm md:text-base my-4 space-x-3 flex-wrap">
                    {org?.offering?.includes("Free service") && (
                      <p
                        className={`${chipTextStyle} bg-green-200 rounded-full px-2`}
                      >
                        Free service
                      </p>
                    )}
                    {org?.referralRequired && (
                      <p
                        className={`${chipTextStyle} bg-yellow-300 rounded-full px-2`}
                      >
                        Referral required
                      </p>
                    )}
                    {(org?.cta?.find((cta) => cta.type === "book-online") ||
                      org?.cta?.find(
                        (cta) => cta.type === "book-by-phone"
                      )) && (
                      <p
                        className={`${chipTextStyle} bg-pink-200 rounded-full px-2`}
                      >
                        By appointment{" "}
                        {!org?.cta?.find((cta) => cta.type === "turn-up") &&
                          "only"}
                      </p>
                    )}
                    {org?.cta?.find((cta) => cta.type === "turn-up") && (
                      <p
                        className={`${chipTextStyle} bg-teal-200 rounded-full px-2`}
                      >
                        Drop in
                      </p>
                    )}
                  </div>
                )}
              </div>
            </div>

            <div className="contact-details-container mt-4 md:w-18rem md:ml-8 flex flex-col space-y-6 p-4 border border-gray-300 rounded-lg">
              {org?.venue && org?.cta?.find((cta) => cta.type === "turn-up") && (
                <div className="flex flex-col items-end">
                  <p className="text-right">{org?.venue?.name || org?.name}</p>
                  <p className="capitalize text-right">
                    {`${org?.venue?.address || ""}, ${
                      org?.venue?.postcode || ""
                    }`}
                  </p>
                </div>
              )}

              <div className="space-y-1">
                {org?.phone && (
                  <div className="flex items-center justify-between text-sm border border-gray-300 rounded overflow-hidden">
                    <img src="/icons/phone.svg" alt="phone" className="p-2" />
                    <p className="mr-1">{org?.phone}</p>
                  </div>
                )}
                {org?.email && (
                  <div className="flex items-center justify-between text-sm border border-gray-300 rounded overflow-hidden">
                    <img src="/icons/email.svg" alt="email" className="p-2" />
                    <p className="mr-1">{org?.email}</p>
                  </div>
                )}
                {org?.website && (
                  <div className="flex items-center justify-between text-sm border border-gray-300 rounded overflow-hidden">
                    <img
                      src="/icons/internet.svg"
                      alt="website"
                      className="p-2"
                    />
                    <a
                      href={`${org?.website}`}
                      target="_blank"
                      className="cursor-pointer underline mr-1 text-sm hover:text-royalb"
                    >
                      {org?.website.replace(/(^\w+:|^)\/\//, "")}
                    </a>
                  </div>
                )}
              </div>

              {org?.venue?.openHours &&
                org?.cta?.find((cta) => cta.type === "turn-up") && (
                  <div className="space-y-1">
                    <p className="">Opening Hours</p>
                    <OpenHours org={org} />
                  </div>
                )}

              {org?.openingDays && (
                <div className="py-2">
                  <p className="pb-1">This activity runs on</p>
                  <OpenDays orgDays={org?.openingDays} large />
                </div>
              )}
            </div>
          </div>
          <hr className="mb-4 md:mb-8 border border-gray-300 md:w-7/12 lg:w-8/12" />

          <div className="flex flex-col md:flex-row pb-4 space-y-4 md:space-x-4 md:space-y-0 flex-wrap items-center md:items-start">
            <CTAButtons
              org={org}
              nameGoogleParam={nameGoogleParam}
              onReferralRequestClick={() => setCatchmentCheckVisible(true)}
            />
          </div>
          <div>
            <p className="m-1 mb-4 rounded-lg text-gray-700 text-center text-sm md:text-base bg-indigo-100 py-2 shadow">
              If you need urgent food support, please call{" "}
              <span className="font-bold">Contact Camden</span> on{" "}
              <span className="font-bold">020 7974 4444</span> and select{" "}
              <span className="font-bold">option 9</span>
            </p>
          </div>

          {catchmentCheckVisible && (
            <div className="catchment-check py-4 lg:py-8">
              <p>
                Please enter your postcode to check that {org?.name} covers your
                area.
              </p>
              <PostcodeAutocomplete
                onLookUp={(value) => {
                  handleCatchmentAreaCheck(value);
                }}
                setFocusedVenue={() => {}}
                containerClassName="w-48 mt-2 shadow-none"
                placeholder="e.g. N1C 4AG"
              />
            </div>
          )}

          {org?.catchmentArea && (
            <section className="mt-4">
              <h2 className="mb-1 flex flex-row items-center">
                The area {org?.name} covers
                <img
                  className="h-5 ml-2 cursor-pointer"
                  src="/icons/info.svg"
                  alt="info"
                  onClick={() => setShowCatchmentInfo(!showCatchmentInfo)}
                />
              </h2>
              {showCatchmentInfo && (
                <p className="m-1 mb-2 text-sm p-1 bg-blue-100 border rounded-lg border-blue-300 text-gray-700">
                  This is a rough catchment area, we cannot guarantee this
                  organisation will be able to support you
                </p>
              )}
              <div className="map-container z-40 h-64 flex flex-col items-center md:h-25rem">
                <CatchmentMap org={org} />
              </div>
            </section>
          )}
        </div>

        <div className="my-4 mb-8 w-11/12 justify-self-center">
          <h2 className="text-lg lg:text-2xl font-extrabold">Others nearby</h2>
          <VenueCarousel
            ids={[
              "HVCBddRR8RBnjGQxXEx0",
              "3HYp3EAqJpa6Db1w2rG8",
              "lWPUlKlJfJe76YB0mBSS",
              "YjjYWZvEUOs2JR5CvPx5",
              "gUhS2amZM1jB7vxfxoS1",
            ]}
          />
        </div>
      </div>

      <Modal
        id="referralRequestModal"
        isOpen={referralRequestModalVisible}
        onClose={() => {
          setReferralRequestModalVisible(false);
        }}
        closeLabel={isInArea ? "Cancel" : "Close"}
        onOK={() => {}}
        OKLabel={
          isInArea && (
            <a
              href={referralCTA?.link}
              className="text-white"
              target="_blank"
              rel="noreferrer"
            >
              Request a Referral
            </a>
          )
        }
      >
        {isInArea ? (
          <div className="space-y-4 flex flex-row text-lg">
            <p className="flex flex-col md:flex-row items-center">
              <span>
                <img
                  src="/icons/success.svg"
                  className="h-8 mr-2 mb-4 md:mb-0"
                  alt="success icon"
                />
              </span>
              Great, you're in the area {org?.name} supports.
            </p>
          </div>
        ) : (
          <div className="space-y-4 flex flex-col">
            <p className="flex flex-row items-center">
              <span>
                <img
                  src="/icons/error.svg"
                  className="h-8 mr-2 mb-4 md:mb-0"
                  alt="warning icon"
                />
              </span>
              Sorry, you're not in {org?.name}'s area.
            </p>
            <p>
              Try{" "}
              {
                <Link href="/camden-food">
                  <span className="underline cursor-pointer text-indigo-600 hover:text-indigo-700">
                    searching
                  </span>
                </Link>
              }{" "}
              for places near you.
            </p>
            {/* <p>
              If you're unable to find somewhere close to you, please Contact
              Camden
            </p> */}
          </div>
        )}
      </Modal>
    </>
  );
};

export async function getStaticProps(context) {
  const { params } = context;
  const { id } = params;

  const capacityId = id.split("-").pop();

  const res = await fetchProfile({
    body: { id: capacityId },
  });

  console.log("res.json", res);

  return {
    props: {
      org: res._source,
      id,
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every second
    revalidate: 600, // In seconds
  };
}

export async function getStaticPaths() {
  return {
    paths: [
      // See the "paths" section below
    ],
    fallback: true, // See the "fallback" section below
  };
}

export default Profile;

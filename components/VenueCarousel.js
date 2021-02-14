import VenueCard from "./VenueCard";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import OpenDays from "./OpenDays";
import Link from "next/link";
import defaultCoverPhoto from '../models/defaultCoverPhotos'
import stringToSlug from '../methods/stringToSlug'

const CarouselCard = (props) => {
  const { org, index } = props;

  const profileURL = `/profile/${stringToSlug(org.tag)}-${stringToSlug(org.name)}-${org._id}`

  return (
    <div
      key={org?.name + org?.tag}
      className="relative carousel-card z-0 focus:border-blue-500 rounded-lg lg:w-1/6"
    >
      <Link href={profileURL}>
        <a className="border border-gray-200 rounded-lg w-64 lg:w-full overflow-hidden h-full flex flex-col">
          <img
            className="block h-32 w-full object-cover"
            src={org?.coverPhoto || defaultCoverPhoto(index)}
            alt=""
          />
          <div className={`flex flex-col justify-between px-2 py-4 flex-1`}>
            <div>
              <h3 className={`text-xl font-bold tracking-tight leading-2`}>
                {org?.tag}
              </h3>
              <p className="text-gray-700">{org?.name}</p>
            </div>
            <OpenDays orgDays={org.openingDays} {...props} openDaysSmall />
          </div>
        </a>
      </Link>
    </div>
  );
};

const VenueCarousel = (props) => {
  const { ids } = props;

  const [orgList, setOrgList] = useState([]);
  useEffect(() => {
    fetch("/api/featured", {
      method: "POST",
      body: JSON.stringify({
        ids,
      }),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setOrgList(
          data.hits.hits.map((hit) => ({ ...hit._source, _id: hit._id }))
        );
      });
  }, []);

  return (
    <div className="flex overflow-x-auto lg:overflow-visible space-x-6 lg:space-x-8 justify-between">
      {orgList.slice(0, 5).map((org, index) => {
        return <CarouselCard org={org} key={org.name} index={index}/>;
      })}
    </div>
  );
};

VenueCarousel.propTypes = {
  ids: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default VenueCarousel;

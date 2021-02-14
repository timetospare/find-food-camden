import VenueCard from "./VenueCard";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";

const VenueCards = (props) => {
  const { focusedVenue, categoryFilter, travelTime, orgModel } = props;

  let orgList = orgModel;

  if (focusedVenue) {
    orgList = [focusedVenue];
  }
  if (categoryFilter) {
    orgList = orgModel.filter(
      (org) =>
        org.offering && Object.values(org.offering).includes(categoryFilter)
    );
  }

  return (
    <div
      className={`${
        focusedVenue ? "-mt-8 lg:mt-3" : "pt-3"
      } space-y-4 lg:space-y-8`}
      // className={`space-y-8`}
    >
      {orgList.map((org, i) => {
        return (
          <VenueCard
            org={org}
            index={i}
            key={org._id}
            {...props}
            travelTime={
              travelTime?.locations?.filter((item) => item.id === org._id)?.[0]
                ?.properties?.[0]?.travel_time
            }
          />
        );
      })}
    </div>
  );
};

VenueCard.propTypes = {
  focusedVenue: PropTypes.object,
  categoriesSelected: PropTypes.arrayOf(PropTypes.string),
};

export default VenueCards;

import OpenDays from '../components/OpenDays';
import Link from 'next/link';
import PropTypes from 'prop-types';
import OrgCategories from './OrgCategories';
import Router from 'next/router';
import { useMediaQuery } from 'react-responsive';
import defaultCoverPhoto from '../models/defaultCoverPhotos';
import stringToSlug from '../methods/stringToSlug';
import scrollToTop from '../methods/scrollToTop';

const VenueCard = props => {
  const { org, focusedVenue, setFocusedVenue, travelTime, index, categoryFilter } = props;

  const isMobile = useMediaQuery({
    query: '(max-device-width: 750px)',
  });

  const bodyTextStyle = `text-gray-700 text-sm sm:text-base inline-flex items-center`;

  const focused = focusedVenue?._id === org._id;

  const profileURL = `/profile/${stringToSlug(org.tag)}-${stringToSlug(
    org.name
  )}-${org._id}`;

  const handleFocusedClickedMob = () => {
    setFocusedVenue(org);
    scrollToTop()
  }

  return (
    <div key={org._id} tabIndex="0" className={`relative venue-card z-0 -mt-12 md:mt-0`}>
      {focused && (
        <img
          className="absolute right-0 top-0 cursor-pointer z-50 m-4 lg:m-3"
          src="/icons/close.svg"
          alt={`close ${org.name}`}
          onClick={() => setFocusedVenue(null)}
        />
      )}
      <div
        onClick={() => {
          !focused && !isMobile
            ? Router.push(profileURL)
            : !focused
            ? handleFocusedClickedMob()
            : null;
        }}
        className={`lg:flex lg:border lg:border-gray-200 lg:shadow-md hover:shadow-lg  ${
          !focused && 'cursor-pointer'
        }`}
      >
        <img
          className="hidden lg:block h-36 w-40 object-cover"
          src={org.coverPhoto || defaultCoverPhoto(index || 1)}
          alt=""
        />
        <div
          className={`flex flex-col justify-between ${
            focused && 'py-3 lg:p-4 '
          } ${categoryFilter && 'mt-12'} px-6 lg:p-4 lg:w-full space-y-2 lg:space-y-4`}
        >
          {(org.tag || org.name) && (
            <div>
              <h2 className={`${focused && ''} text-xl lg:text-2xl`}>
                {org.tag}
              </h2>
              <h3 className="m-0 text-gray-700">{org.name}</h3>
            </div>
          )}

          {org.openingDays && <OpenDays orgDays={org.openingDays} {...props} />}

          {(org.referralRequired || org.offering?.includes('Free service')) && (
            <div className="flex space-x-2">
              <p className={`${bodyTextStyle} bg-green-200 rounded-full px-2`}>
                {org.offering?.includes('Free service') && 'Free service'}
              </p>
              {org.referralRequired && (
                <p className={`${bodyTextStyle} bg-yellow-300 rounded-full px-2`}>
                  Referral required
                </p>
              )}
            </div>
          )}

          {(org?.offering || org.venue?.geopoint) && (
            <div className="flex justify-between items-center w-full">
              <OrgCategories org={org} />
              {org.venue?.geopoint && (
                <span className={`${bodyTextStyle}`}>
                  <img
                    src="/icons/walk.svg"
                    alt="walking"
                    className="h-4 mr-1"
                  />
                  {travelTime
                    ? `${Math.round(travelTime / 60)} minutes walk`
                    : '1 hour + walk'}
                </span>
              )}
            </div>
          )}

          {focused && (
            <div className="flex flex-col">
              <p className="text-gray-800">{org.description}</p>
            </div>
          )}

          {focused && (
            <div className="flex self-center lg:self-end">
              <Link href={profileURL}>
                <p className="btn-primary self-center cursor-pointer">
                  View Details
                </p>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

VenueCard.propTypes = {
  org: PropTypes.object,
  focusedVenue: PropTypes.object,
  index: PropTypes.number,
  setFocusedVenue: PropTypes.func.isRequired,
};

export default VenueCard;

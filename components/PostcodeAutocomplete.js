import { useEffect, useState } from 'react';
import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
} from '@reach/combobox';
import '@reach/combobox/styles.css';
import fetchSuggestedPostcodes from '../methods/fetchSuggestedPostcodes';
import fetchPostcodeData from '../methods/fetchPostcodeData';
import PropTypes from 'prop-types';
import recordLocationSearch from '../methods/recordLocationSearch';
import Modal from '../components/Modal';

const PostcodeAutocomplete = props => {
  const {
    setFocusedVenue,
    focusedVenue,
    onMap,
    onLookUp,
    containerClassName,
    placeholder,
  } = props;
  const [postcode, setPostcode] = useState('');
  const [searchText, setSearchText] = useState('');
  const [suggestedPostcodes, setSuggestedPostcodes] = useState([]);
  const [postcodeError, setPostcodeError] = useState('');

  useEffect(() => {
    if (!searchText) {
      setPostcodeError('');
    } else {
      fetchSuggestedPostcodes({
        searchText,
      })
        .then(result => {
          setSuggestedPostcodes(result);
        })
        .catch(err => {
          setPostcodeError(err.message);
        });
    }
  }, [searchText]);

  useEffect(() => {
    if (postcode) {
      window.analytics?.track('Search Postcode');
      fetchPostcodeData({
        postcode,
        postcodeError,
      }).then(data => {
        const result = {
          latitude: data?.result?.latitude,
          longitude: data?.result?.longitude,
          adminDistrict: data?.result?.codes?.admin_district,
        };
        recordLocationSearch(result);
        if (onLookUp) {
          onLookUp(result);
        }
      });
    }
    setFocusedVenue(null);
  }, [postcode]);

  useEffect(() => {
    suggestedPostcodes?.length == 1 ? setPostcode(suggestedPostcodes[0]) : null;
  }, [suggestedPostcodes]);

  useEffect(() => {
    if (postcodeError) {
      //setSearchText("");
      setSuggestedPostcodes([]);
    }
  }, [postcodeError]);

  const handleCancel = () => {
    setSearchText('');
    setPostcode('');
    setPostcodeError('');
    setSuggestedPostcodes([]);
  };

  return (
    <div>
      {focusedVenue && (
        <button
          className="cursor-pointer text-md flex pl-6 pt-2 pb-1 text-left justify-start w-full md:hidden"
          onClick={() => setFocusedVenue(null)}
        >
          <img className="pr-2 h-4 mt-1" src="/icons/back.svg" alt="back" />
          <p className="font-thin  text-gray-700"> Back to listings</p>
        </button>
      )}
      {!focusedVenue && (
        <Combobox
          aria-label="postcode search"
          onSelect={value => setPostcode(value)}
          className={
            containerClassName ||
            'w-11/12 lg:w-full flex flex-col justify-center items-center bg-transparent'
          }
        >
          <div className="flex">
            <ComboboxInput
              placeholder={placeholder}
              className={`items-centerinput space-y-2 p-2 flex w-full justify-start border border-gray-500 rounded-3xl bg-white ${onMap ? "shadow-lg lg:shadow-sm" : "shadow"}`}
              onChange={e => setSearchText(e.target.value)}
              value={postcode?.toUpperCase() || searchText?.toUpperCase()}
            />
            {postcodeError || searchText ? (
              <button onClick={handleCancel} className="-ml-8 cursor-pointer">
                <img className="" src="/icons/close.svg" alt="clear search" />
              </button>
            ) : (
              <button
                className="-ml-8 cursor-pointer"
                onClick={e => {
                  setPostcode(e.target.value);
                  setFocusedVenue(null);
                  setSearchText('');
                }}
              >
                <img src="/icons/search.svg" alt="search" />
              </button>
            )}
          </div>
          {postcodeError && (
            <p className="text-red-500 text-sm bg-white rounded mt-1 px-2 lg:-mb-1">
              {postcodeError}
            </p>
          )}
          <ComboboxPopover>
            {suggestedPostcodes?.length > 0 && (
              <ComboboxList className="dropdown-container relative space-y-2 bg-white z-50 p-2 shadow-lg rounded-lg">
                {suggestedPostcodes.slice(0, 6).map(code => {
                  return (
                    <ComboboxOption
                      className="dropdown-option"
                      value={code}
                      key={code}
                      onClick={e => {
                        setPostcode(code);
                        setFocusedVenue(null);
                      }}
                    />
                  );
                })}
              </ComboboxList>
            )}
          </ComboboxPopover>
        </Combobox>
      )}
    </div>
  );
};

PostcodeAutocomplete.propTypes = {
  setFocusedVenue: PropTypes.func.isRequired,
  focusedVenue: PropTypes.object,
  onMap: PropTypes.bool,
  containerClassName: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
};

export default PostcodeAutocomplete;

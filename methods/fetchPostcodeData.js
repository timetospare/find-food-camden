const fetchPostcodeData = props => {
  const { postcode, setPostcodeError } = props;
  return fetch(`https://api.postcodes.io/postcodes/${postcode}`)
    .then(response => {
      if (response.status === 200) {
        return response.json();
      } else {
        setPostcodeError('Postcode Invalid. Please enter a valid postcode');
        throw new Error('Postcode Invalid');
      }
    })
    .then(data => {
      if (data?.result?.latitude && data?.result?.longitude) {
        return data;
      } else {
        setPostcodeError(`Unable to get coordinates for this postcode`);
      }
    })
    .catch(console.log);
};

export default fetchPostcodeData;

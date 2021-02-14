const fetchSuggestedPostcodes = (props) => {
  const { searchText } = props;
  if (searchText.length > 8) {
    // setPostcodeError('Postcode Invalid. Please enter a valid postcode');
    return Promise.resolve().then(() => {
      throw new Error("Postcode Invalid");
    });
  } else if (searchText) {
    // setPostcodeError('');
    return fetch(
      `https://api.postcodes.io/postcodes/${searchText}/autocomplete`
    )
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        } else {
          // return { error: {message: 'Postcode Invalid. Please enter a valid postcode'}}
          throw new Error("Postcode Invalid");
        }
      })
      .then((data) => {
        if (data.result !== null) {
          return data.result;
        } else {
          // setPostcodeError('Postcode Invalid. Please enter a valid postcode');
          throw new Error("Postcode Invalid");
        }
      });
  }
};

export default fetchSuggestedPostcodes;

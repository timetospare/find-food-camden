const stringToSlug = str => {
  return str?.replace(/\s+/g, '-').toLowerCase();
};

export default stringToSlug;

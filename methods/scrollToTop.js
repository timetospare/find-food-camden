const scrollToTop = () => {
  if (typeof window !== 'undefined') {
    return window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }
};

export default scrollToTop;

const ScrollIntoView = (divId) => {
  document.getElementById(divId).scrollIntoView({ behavior: 'smooth' });
};

export default ScrollIntoView;

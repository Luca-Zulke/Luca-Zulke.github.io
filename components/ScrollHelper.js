export const DisableScroll = () => {
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  var scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
  window.onscroll = function () {
    window.scrollTo({
      top: scrollTop,
      left: scrollLeft,
      behavior: 'instant',
    });
  };
};

export const EnableScroll = () => {
  window.onscroll = function () {};
};

export const updateSliderBackground = (ref, value, min, max) => {
  if (ref.current) {
    const percent = ((value - min) / (max - min)) * 100;
    ref.current.style.background = `linear-gradient(90deg, #ff323d 0%, #147cf7 ${percent}%, #000 ${percent}%)`;
  }
};

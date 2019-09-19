export default (min, max) => {
  const num = Math.floor(min + (max - min) * (Math.random()));
  return num;
};

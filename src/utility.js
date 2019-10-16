export default (min, max) => {
  const result = Math.floor(Math.random() * ((max + 1) - min) + min);
  return result;
};

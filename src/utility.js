export default (min, max) => {
  const num = Math.floor(Math.random() * ((max + 1) - min) + min);
  return num;
};
export const getAnswer = (func) => {
  if (func === true) {
    return 'yes';
  } return 'no';
};

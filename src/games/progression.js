import { cons } from '@hexlet/pairs';
import core from '..';
import generateNum from '../utility';

const condition = 'What number is missing in the progression?';
const progressionLength = 10;
const getQuestion = (start, diff, secret) => {
  let result = '';
  const secretPlace = '..';
  for (let counter = 0; counter < progressionLength; counter += 1) {
    const step = (secret === counter) ? secretPlace : start + diff * (counter);
    result = `${result} ${step}`;
  }
  return result;
};
const generateData = () => {
  const startNum = generateNum(0, 50);
  const diff = generateNum(1, 7);
  const positionSecret = generateNum(0, progressionLength);
  const question = getQuestion(startNum, diff, positionSecret);
  const answer = String(startNum + diff * (positionSecret));
  return cons(question, answer);
};
export default () => core(condition, generateData);

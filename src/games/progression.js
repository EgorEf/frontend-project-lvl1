import { cons } from '@hexlet/pairs';
import core from '..';
import generateNum from '../utility';

const condition = 'What number is missing in the progression?';
const minNum = 0;
const maxNum = 50;
const minLengthStep = 1;
const maxLengthStep = 7;
const minPositionSecret = 0;
const maxPositionSecret = 11;
const getQuestion = (beginNumber, lengthStep, positionSecret) => {
  const progressionLength = 10;
  let progression = beginNumber;
  let result = '';
  const secret = '..';
  for (let counter = 0; counter <= progressionLength; counter += 1) {
    const step = (positionSecret === counter) ? secret : progression;
    progression += lengthStep;
    result = `${result}${step} `;
  }
  return String(`${result}`);
};
export default () => {
  const generateData = () => {
    const beginNum = generateNum(minNum, maxNum);
    const lengthStep = generateNum(minLengthStep, maxLengthStep);
    const positionSecret = generateNum(minPositionSecret, maxPositionSecret);
    const question = getQuestion(beginNum, lengthStep, positionSecret);
    const answer = String(beginNum + lengthStep * (positionSecret));
    return cons(question, answer);
  };
  return core(condition, generateData);
};

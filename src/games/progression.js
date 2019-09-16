import { cons } from '@hexlet/pairs';
import core from '..';
import generateNum from '../utility';

export default () => {
  const condition = 'What number is missing in the progression?';
  const generateBeginNum = () => {
    const minNum = 0;
    const maxNum = 50;
    return generateNum(minNum, maxNum);
  };
  const generatelengthStep = () => {
    const min = 1;
    const max = 7;
    return generateNum(min, max);
  };
  const generatePositionSecret = () => {
    const min = 0;
    const max = 11;
    return generateNum(min, max);
  };
  const generateData = () => {
    const beginNum = generateBeginNum();
    const lengthStep = generatelengthStep();
    const positionSecret = generatePositionSecret();
    const progressionLength = 10;
    const getQuestion = () => {
      let progression = beginNum;
      let result = '';
      const secret = '..';
      for (let counter = 0; counter <= progressionLength; counter += 1) {
        const step = (positionSecret === counter) ? secret : progression;
        progression += lengthStep;
        result += `${step} `;
      }
      return String(`${result}`);
    };
    const question = getQuestion();
    const answer = String(beginNum + lengthStep * (positionSecret));
    return cons(question, answer);
  };
  return core(condition, generateData);
};

import { IQuestion } from './types';

const questionAmount: IQuestion = {
  type: 'numeral',
  name: 'amount',
  message: 'Enter the amount: ',
};

const questionFrom: IQuestion = {
  name: 'from',
  type: 'autocomplete',
  choices: [],
  limit: '10',
  message: 'Ticker from: ',
  initial: 'BTC',
};

const questionTo: IQuestion = {
  type: 'autocomplete',
  name: 'to',
  choices: [],
  limit: '10',
  message: 'Ticker to: ',
  initial: 'USD',
};

export {
  questionAmount,
  questionFrom,
  questionTo,
}

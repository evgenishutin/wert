import { prompt } from 'enquirer';
import { converting, getCryptoCurrenciesList, getFiatList } from './utils/requestModule/index';
import { IQuestion, IAnswer } from './types';

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

async function main(): Promise<void> {
  try {
    while(true) {
      const answers1: IAnswer = await prompt(questionAmount);
      const cryptoList = await getCryptoCurrenciesList();
      const fiatList = await getFiatList();
      const allCurrencies = cryptoList.concat(fiatList);
      questionFrom.choices = allCurrencies;
    
      const answers2: IAnswer = await prompt(questionFrom);
      const fromTicker = answers2.from || '';
      const isFiat = fiatList.find(i => i === fromTicker);
    
      if (isFiat) {
        questionTo.choices = cryptoList;
      } else {
        questionTo.choices = allCurrencies;
      }
    
      const answers3: IAnswer = await prompt(questionTo);
      const result = await converting(answers1.amount, fromTicker, answers3.to);
      console.log(result);
    }
  } catch (err) {
    console.error(err);
  }
};
main();










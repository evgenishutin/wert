import { prompt } from 'enquirer';
import { IAnswer } from './clients/enquirerModule/types';
import * as questions from './clients/enquirerModule/config';
import { Converting } from './domain/useCases/convert.useCase';
import { Convert } from './clients/coinmarketcap';

async function main(): Promise<void> {
  try {
    const Client = new Convert();
    const ResultConvert = new Converting(Client);
    const { questionAmount, questionFrom, questionTo } = questions;
  
    while(true) {
      const answers1: IAnswer = await prompt(questionAmount);
      const { amount } = answers1;
      const answers2: IAnswer = await prompt(questionFrom);
      const { from } = answers2;
      const answers3: IAnswer = await prompt(questionTo);
      const { to } = answers3;

      if (amount && from && to) {
        const result = await ResultConvert.convert(from, to, amount);
        console.log(result);
      }
    }
  } catch (err) {
    console.error(err);
  }
}
main();
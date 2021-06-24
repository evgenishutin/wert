import { prompt } from 'enquirer';
import { ListUseCase } from "./domain/usecases/getList.usecase";
import { ConvertUseCase } from "./domain/usecases/convert.usecase";
import { IAnswer } from './modules/enquirerModule/types';
import * as questions from './modules/enquirerModule/config';
import { ConvertCurrency } from "./modules/adapters/convert.adapter";
import { GetCurrensiesAdapter } from './modules/adapters/getList.adapter';

async function main(): Promise<void> {
  try {
    const listAdapter = new ListUseCase(new GetCurrensiesAdapter);
    const convertAdapter = new ConvertUseCase(new ConvertCurrency);
    const { questionAmount, questionFrom, questionTo } = questions;
  
    while(true) {
      const answers1: IAnswer = await prompt(questionAmount);
      const { amount } = answers1;
      const cryptoList = await listAdapter.getList('crypto');
      const fiatList = await listAdapter.getList('fiat');
      const allCurrencies = cryptoList.concat(fiatList);
      questionFrom.choices = allCurrencies;
      const answers2: IAnswer = await prompt(questionFrom);
      const { from } = answers2;
      const isFiat = fiatList.find(i => i === from);
    
      if (isFiat) {
        questionTo.choices = cryptoList;
      } else {
        questionTo.choices = allCurrencies;
      }
    
      const answers3: IAnswer = await prompt(questionTo);
      const { to } = answers3;

      if (amount && from && to) {
        const result = await convertAdapter.convert(amount, from, to);
        console.log(result);
      }
    }
  } catch (err) {
    console.error(err);
  }
}
main();
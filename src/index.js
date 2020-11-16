const { getRandomWordSync, getRandomWord } = require('word-maker');

const fs = require('fs');

const moment = require('moment');

// YOUR CODE HERE
let finalOutputData = '';


/* Task 01 : Print numbers from 1-100 with random numbers */
const printRandomWords = () => {

  finalOutputData += 'Task : 01 -> Print numbers from 1-100 with random numbers\n\n';

  for (let index = 1; index < 101; index++) {
    finalOutputData += `${index}: ${getRandomWordSync()}\n`;
  }

  finalOutputData += '\n\n#--------------------------#';

  return;

};


/* Task 02 : "Fizz Buzz" synchronous function */
const fizzBuzzCode = () => {

  finalOutputData += '\n\nTask : 02 -> "Fizz Buzz" synchronous function\n\n';

  for (let index = 1; index < 101; index++) {

    const multiplesOfThree = (index % 3 === 0) ? 'Fizz' : '';
    const multiplesOfFive = (index % 5 === 0) ? 'Buzz' : '';
    const randomWord = ((multiplesOfThree + multiplesOfFive).length > 0) ? '' : getRandomWordSync();

    finalOutputData += `${index}: ${multiplesOfThree}${multiplesOfFive}${randomWord}\n`;
  }

  finalOutputData += '\n\n#--------------------------#';

  return;

};


/* Task 03.01 : Random words print asynchronous version */
const printRandomWordsAsync = async () => {

  finalOutputData += '\n\nTask : 03.01 -> Random words print asynchronous version\n\n';

  for (let index = 1; index < 101; index++) {
    const randomWord = await getRandomWord();

    finalOutputData += `${index}: ${randomWord}\n`;
  }

  finalOutputData += '\n\n#--------------------------#';

  return;

};


/* Task 03.02 : "Fizz Buzz" asynchronous version */
const fizzBuzzCodeAsync = async () => {

  finalOutputData += '\n\nTask : 03.02 -> "Fizz Buzz" asynchronous version\n\n';

  for (let index = 1; index < 101; index++) {

    const multiplesOfThree = (index % 3 === 0) ? 'Fizz' : '';
    const multiplesOfFive = (index % 5 === 0) ? 'Buzz' : '';
    const randomWord = ((multiplesOfThree + multiplesOfFive).length > 0) ? '' : await getRandomWord();

    finalOutputData += `${index}: ${multiplesOfThree}${multiplesOfFive}${randomWord}\n`;
  }

  finalOutputData += '\n\n#--------------------------#';

  return;

};


/* Task 04.01 : "Fizz Buzz" synchronous function with Errors */
const fizzBuzzCodeWithErrors = () => {

  finalOutputData += '\n\nTask : 04.01 -> "Fizz Buzz" synchronous function with Errors\n\n';

  for (let index = 1; index < 101; index++) {

    const multiplesOfThree = (index % 3 === 0) ? 'Fizz' : '';
    const multiplesOfFive = (index % 5 === 0) ? 'Buzz' : '';
    let randomWord = '';

    try {
      randomWord = ((multiplesOfThree + multiplesOfFive).length > 0) ? '' : getRandomWordSync({ withErrors: true });
    } catch (error) {
      randomWord = 'It shouldn\'t break anything!';
    }

    finalOutputData += `${index}: ${multiplesOfThree}${multiplesOfFive}${randomWord}\n`;
  }

  finalOutputData += '\n\n#--------------------------#';

  return;

};


/* Task 04.02 : "Fizz Buzz" asynchronous version with Errors */
const fizzBuzzCodeAsyncWithErrors = async () => {

  finalOutputData += '\n\nTask : 04.02 -> "Fizz Buzz" asynchronous version with Errors\n\n';

  for (let index = 1; index < 101; index++) {

    const multiplesOfThree = (index % 3 === 0) ? 'Fizz' : '';
    const multiplesOfFive = (index % 5 === 0) ? 'Buzz' : '';
    let randomWord = '';

    try {
      randomWord = ((multiplesOfThree + multiplesOfFive).length > 0) ? '' : await getRandomWord({ withErrors: true });
    } catch (error) {
      randomWord = 'It shouldn\'t break anything!';
    }

    finalOutputData += `${index}: ${multiplesOfThree}${multiplesOfFive}${randomWord}\n`;
  }

  finalOutputData += '\n\n#--------------------------#';

  return;

};


/* Task Bonus Level 01 : "Fizz Buzz" asynchronous version : ascending order */
const fizzBuzzCodeAsyncWithErrorsAscendingOrder = async () => {

  finalOutputData += '\n\nTask : BO.01 -> "Fizz Buzz" asynchronous version : ascending order\n\n';

  for (let index = 100; index > 0; index--) {

    const multiplesOfThree = (index % 3 === 0) ? 'Fizz' : '';
    const multiplesOfFive = (index % 5 === 0) ? 'Buzz' : '';
    let randomWord = '';

    try {
      randomWord = ((multiplesOfThree + multiplesOfFive).length > 0) ? '' : await getRandomWord({ withErrors: true });
    } catch (error) {
      randomWord = 'It shouldn\'t break anything!';
    }

    finalOutputData += `${index}: ${multiplesOfThree}${multiplesOfFive}${randomWord}\n`;
  }

  finalOutputData += '\n\n#--------------------------#';

  return;

};


/* Task Bonus Level 02 : Implementation with "slow" option */
const implementationForSlowOption = async () => {

  const startTime = moment();

  finalOutputData += '\n\nTask : BO.02 -> Implementation with "slow" option\n\n';

  /* implementation : start */

  const promisesArray = [];

  const data = {};

  for (let index = 1; index < 101; index++) {
    promisesArray.push(
      getRandomWord({ slow: true })
        .then((word) => (data[index] = word))
    );
  }

  await Promise.all(promisesArray);

  for (let index = 1; index < 101; index++) {
    finalOutputData += `${index}: ${data[index]}\n`;
  }

  /* implementation : end */

  const endTime = moment();

  finalOutputData += `\n\nStart Time : ${startTime.format('hh:mm:ss:SS a', true)}\t\t(Time format : Hours:Minutes:Seconds:MilliSeconds)`;

  finalOutputData += `\nEnd Time : ${endTime.format('hh:mm:ss:SS a', true)}`;

  finalOutputData += `\nTime Difference : ${endTime.diff(startTime, 'seconds', true)}\t\t(in seconds)`;

  finalOutputData += '\n\n#--------------------------#';

  return;

};


/* init function */
(async () => {

  try {

    console.log('Init function started.');

    /* Task 01 : Print numbers from 1-100 with random numbers */
    printRandomWords();

    /* Task 02 : "Fizz Buzz" synchronous function */
    fizzBuzzCode();

    /* Task 03.01 : Random words print asynchronous version */
    await printRandomWordsAsync();

    /* Task 03.02 : "Fizz Buzz" asynchronous version */
    await fizzBuzzCodeAsync();

    /* Task 04.01 : "Fizz Buzz" synchronous function with Errors */
    fizzBuzzCodeWithErrors();

    /* Task 04.02 : "Fizz Buzz" asynchronous version with Errors */
    await fizzBuzzCodeAsyncWithErrors();

    /* Task Bonus Level 01 : "Fizz Buzz" asynchronous version : ascending order */
    await fizzBuzzCodeAsyncWithErrorsAscendingOrder();

    /* Task Bonus Level 02 : Implementation with "slow" option */
    await implementationForSlowOption();

  } catch (error) {
    console.error('Error occurred while executing!');
    console.error(error);

  } finally {

    console.log('Process completed!');

    fs.writeFile('response.txt', finalOutputData, err => {
      if (err) {
        console.log('Error while writing file.');
        console.error(err);
        return;
      }

      console.log('Response has written into a file called : "response.txt"');
      return;
    });

  }

})();

/*
  Name : N D K Ariyasena
  Email : ndkariyasena@gmail.com
  Phone : +94761425025
*/
import readlineSync from 'readline-sync';

export function getUserName(){
  const name = readlineSync.question('May I have your name: ');
  console.log(`Hello, ${name}!`);
  return;
}



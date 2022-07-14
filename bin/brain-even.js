#!/usr/bin/env node

import getUserName from '../src/cli.js';

console.log('Welcome to the Brain Games!');

const name = getUserName();

console.log('Answer "yes" if the number is even, otherwise answer "no".');

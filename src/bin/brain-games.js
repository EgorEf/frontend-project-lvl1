#!/usr/bin/env node
import getName from '..';

console.log('Welcome to the Brain Games!');
const name = getName();
const trueName = name === '' ? 'anonymous' : name;
console.log(`Hello, ${trueName}`);

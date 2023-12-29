export function sum(x, y) {
  return x + y;
}

export function multiply(x, y) {
  return x * y;
}

export function subtract(x, y) {
  return x - y;
}

export function divide(x, y) {
  return x / y;
}

// math js contains functions that calculate sum, subtract, divide and multiply
// with export function we can use the function in other files by importing it
// import { sum, subtract, divide, multiply } from './math.js';
// we make modular code by exporting functions from one file and importing them in another file
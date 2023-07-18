// type Concat<T, U> = any;

type Concat<T extends unknown[], Y extends unknown[]> = [...T, ...Y];

/*
js

function Concat (arrA, arrB) {

  // spread
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
  
  return [...arrA, ...arrB];
}

*/

// infer spread
// first --> [1, 2, 3] -> 1
// tail --> [1, 2, 3] -> 3

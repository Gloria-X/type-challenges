// type Includes<T extends readonly any[], U> = any;

import { Equal } from '@type-challenges/utils';

// Indludes<T extends any[], U> = {[K in keyof T]: K};

export type Includes<T extends readonly any[], U> = T extends [
  infer First,
  ...infer Rest,
]
  ? Equal<First, U> extends true
    ? true
    : Includes<Rest, U>
  : false;

/*
js

function Includes (list, key) {
  for (let i = 0; i < list.length; i++) {
    const element = list[i];
    if (element === key) {
      return true;
    }
  }
  return false
}

递归

function Includes(list, key) {
  function _(list, key) {
    // 结束递归
    if (list.length === 0) return false;
    const [first, ...rest] = list;

    if (first === key) {
      return true;
    } else {
      return _(rest, key);
    }

    return _(list, key);
  }
}

知识点
1. 用递归实现遍历数组
2. ts 的模块规范
  - 如果有export/import，就是模块
  - 没有的话就是全局，可以直接在别的模块用

*/

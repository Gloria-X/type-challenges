import type { Equal, Expect } from '@type-challenges/utils';

const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const;

/*
知识点！！
type r = TupleToObject<typeof tuple>  --> ['0', '1', '2', '3']
keyof array -->  索引

1. typeof 将js转为ts
2. 字面量类型  as const  （let可变，const不可变）
*/

const tupleNumber = [1, 2, 3, 4] as const;
const tupleMix = [1, '2', 3, '4'] as const;

type cases = [
  Expect<
    Equal<
      TupleToObject<typeof tuple>,
      {
        tesla: 'tesla';
        'model 3': 'model 3';
        'model X': 'model X';
        'model Y': 'model Y';
      }
    >
  >,
  Expect<Equal<TupleToObject<typeof tupleNumber>, { 1: 1; 2: 2; 3: 3; 4: 4 }>>,
  Expect<
    Equal<TupleToObject<typeof tupleMix>, { 1: 1; '2': '2'; 3: 3; '4': '4' }>
  >,
];

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
type error = TupleToObject<[[1, 2], {}]>;

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
/*
知识点！！
@ts-expect-error
期望抛出对应的错误
↓

expect(() => {
  type error = TupleToObject<[[1, 2], {}]>;
}).toThrowError();
*/

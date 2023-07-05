// type First<T extends any[]> = any
type First<T extends any[]> = T extends [] ? never : T[0];

/*
1. extends 类型条件判断
type First<T extends any[]> =T extends [] ?never: T[0]

2. 获取 tuple 的 length 属性 indexed
type First<T extends any[]> = T['length'] extends 0 ? never : T[0]

3. extends union 判断的规则
type First<T extends any[]> = T[0] extends T[number] ? T[0] : never

4. inter的使用（推断）
type First<T extends any[]> = T extends [infer First, ...infer Rest] ? First : never;

*/

/*
-- js
const first = (arr) => {
  // arr 是不是一个空数组，如果是的话，那么返回 never
  
  // length
  if (arr.length === 0 ) return "never";
  
  // inter
  const [first, ...rest] = arr
  return first
  
  return arr[0];
};

*/

/*
知识点！！
1. `type t1 = First<[]>`   —> undefined
    如果是一个 [ ] 空数组的话，那么获取的 [0] 是undefined
    
2. 分布式对比方法
  // T[number]
  type ages = [1,2,3]

  // union
  type t1 = ages[number]

  // 看某个值是都在union里
  type t2 = T[0] extends ages[number] ? "true":"false"

  ↓
  1 extends 1  1 extends 2  1 extends 3

3. rest
  const arr = [1, 2, 3]
  const [first, ...rest] = arr

  first —> 1
  rest —> [2, 3]

*/

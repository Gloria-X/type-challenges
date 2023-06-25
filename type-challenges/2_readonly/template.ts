/*
在属性名前增加readonly，即可实现只读。
key部分：利用keyof T得到T的键集合，再利用K in 做遍历，并为每个属性名增加readonly标识。
value部分：T[P]，复用原先的类型即可
*/

// type MyReadonly<T> = any

import { json } from 'stream/consumers';

type MyReadonly<T> = {
  readonly [K in keyof T]: T[K];
};

/*
-- js

function myPick(todo, keys){
  const result= {};

  for (const key in obj){
    result["readonly" + key] = obj[key];
  }

  return result;
};

1. 返回一个对象
2. 遍历 obj （js对象 ts接口）
3. 加上readonly关键字
4. 通过key来获取obj（接口）里的值
 */

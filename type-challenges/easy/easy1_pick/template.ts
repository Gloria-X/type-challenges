// union联合类型的遍历 keyof

// type MyPick<T, K> = any
type MyPick<T, K extends keyof T> = {
  [P in K]: T[P];
};

/*
-- js
function myPick(todo, keys){
  const obj = {};

  keys.forEach(
    (key) => {
      if (key in todo) {
        obj[key] = todo[key];
      }
    }
  );

  return obj;
};

1. 返回一个对象
2. 遍历 forEach
3. todo[ key ] 取值 indexed
4. 判断key是否在todo里
*/

/*
知识点！！
keyof: 取interface的键后保存为联合类型
interface userInfo {
  name: string
  age: number
}
type keyofValue = keyof userInfo

--> keyofValue = "name" | "age"

in: 取联合类型的值，主要用于数组和对象的构建
type name = 'firstname' | 'lastname'
type TName = {
  [key in name]: string
}
--> TName = { firstname: string, lastname: string }

*/

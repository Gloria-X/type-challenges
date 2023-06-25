// type Length<T> = any
type Length<T extends readonly any[]> = T['length'];

/*
-- js
function getLength(arr){
  if (!Array.isArray(arr)) return;
  return arr.length;
};
*/

/*
知识点！！
c.f. tuple & array
  tuple长度定，返回出来是具体数字
  array长度不定，返回出来是number类型
*/

// ts遍历数组

// type TupleToObject<T extends readonly any[]> = any
type TupleToObject<T extends readonly (string | number | symbol)[]> = {
  [P in T[number]]: P;
};

/*
-- js
function tupleToObject(array){
  // 1. array 里面的key是不是string number 或symbol
  // 若不是 则error

  const obj= {};

  array.forEach(
    (val) => {
    obj[val] = val;
    }
  );

  return obj;
};
*/

// type MyExclude<T, U> = any;
type MyExclude<T, U> = T extends U ? never : T;

/*
-- js
// ["a", "b", "c"]
// ["a"]

function MyExclude(T, U){
  const result = []
  for (const i in [0, T.length]; i++){
    const t = T[i]
    let boo = false

    for (const j in [0, T.length]; j++){
      const u = U[j]

      if (t === u){
        boo = true;
      }
    }

    if (!boo){
      result.push(t)
    }
  }

return result;
}

function MyExclude2(T, U : any[]){
  const result = []
  for (const i in [0, T.length]; i++){
    const t = T[i]

    if (!U.includes(t)){
      result.push(t)
      }
  }
return result;
}
*/

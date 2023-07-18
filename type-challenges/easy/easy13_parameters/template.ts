type MyParameters<T extends (...args: any[]) => any> = T extends (
  ...arg: infer P
) => any
  ? P
  : never;

/*
infer -> 推导泛型参数
因为 (a: string, b: number) => void extends (a: infer P,b: infer P) => void，
所以(a: string, b: number) => void 是 (a: infer P,b: infer P) => void 子类型
*/

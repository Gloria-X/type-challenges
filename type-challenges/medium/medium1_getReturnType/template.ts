// type MyReturnType<T> = any;

type MyReturnType<T extends (...arg: any) => any> = T extends (
  ...arg: any
) => infer R
  ? R
  : any;

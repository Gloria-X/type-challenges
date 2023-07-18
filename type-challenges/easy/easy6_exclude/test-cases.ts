import type { Equal, Expect } from '@type-challenges/utils';

type cases = [
  Expect<Equal<MyExclude<'a' | 'b' | 'c', 'a'>, 'b' | 'c'>>,
  Expect<Equal<MyExclude<'a' | 'b' | 'c', 'a' | 'b'>, 'c'>>,
  Expect<
    // eslint-disable-next-line @typescript-eslint/ban-types
    Equal<MyExclude<string | number | (() => void), Function>, string | number>
  >,
];

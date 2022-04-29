import type { Equal, Expect } from "./utils";

type If<C, T, F> = C extends true ? T : F;

/* _____________ テストケース _____________ */

type cases = [
  Expect<Equal<If<true, "a", "b">, "a">>,
  Expect<Equal<If<false, "a", 2>, 2>>
];

type error = If<null, "a", "b">;

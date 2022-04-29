import type { Equal, Expect } from "./utils";

type MyReadonly<T> = { readonly [P in keyof T]: T[P] };

/* _____________ テストケース _____________ */

type cases = [Expect<Equal<MyReadonly<Todo1>, Readonly<Todo1>>>];

interface Todo1 {
  title: string;
  description: string;
  completed: boolean;
  meta: {
    author: string;
  };
}

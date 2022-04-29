import type { Equal, Expect } from "./utils";

type MyPick<T, K extends keyof T> = { [S in K]: T[S] };

type cases = [
  Expect<Equal<Expected1, MyPick<Todo, "title">>>,
  Expect<Equal<Expected2, MyPick<Todo, "title" | "completed">>>,
  // @ts-expect-error
  MyPick<Todo, "title" | "completed" | "invalid">
];

type Todo = {
  title: string;
  description: string;
  completed: boolean;
};

type Expected1 = {
  title: string;
};

type Expected2 = {
  title: string;
  completed: boolean;
};

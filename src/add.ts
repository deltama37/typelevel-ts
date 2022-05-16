type Repeat<T, N extends number, R extends any[] = []> = R["length"] extends N
  ? R
  : Repeat<T, N, [T, ...R]>;

type ToTupleNum<T extends number> = Repeat<any, T>;

type TupleNum = any[];
type ToNumber<T extends TupleNum> = T["length"];

type _Add<T extends TupleNum, U extends TupleNum> = [...T, ...U];
type Add<T extends number, U extends number> = ToNumber<
  _Add<ToTupleNum<T>, ToTupleNum<U>>
>;

type testAdd = Add<50, 100>;

type _Minus<T extends TupleNum, U extends TupleNum> = T extends [
  ...U,
  ...infer X
]
  ? X
  : never;

type Minus<T extends number, U extends number> = ToNumber<
  _Minus<ToTupleNum<T>, ToTupleNum<U>>
>;

type testMinus = Minus<10, 8>;

type Decrement<T extends number> = Minus<T, 1>;
type testDecrement = Decrement<1>;

type Equals<T, S> = [T] extends [S] ? ([S] extends [T] ? true : false) : false;

type Fibonacci<N, F0 = 1, F1 = 1> = {
  acc: F0;
  n: N extends number
    ? F0 extends number
      ? F1 extends number
        ? Fibonacci<Decrement<N>, F1, Add<F0, F1>>
        : never
      : never
    : never;
}[IfElse<Equals<0, N>, "acc", "n">];

type testFiboncci = Fibonacci<0>;

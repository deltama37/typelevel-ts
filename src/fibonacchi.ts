type Zero = "zero";
type Succ<N> = { n: N };

type One = Succ<Zero>;
type Two = Succ<One>;
type Three = Succ<Two>;
type Four = Succ<Three>;
type Five = Succ<Four>;
type Six = Succ<Five>;
type Seven = Succ<Six>;
type Eight = Succ<Seven>;
type Nine = Succ<Eight>;
type Ten = Succ<Nine>;

const zero: Zero = "zero";
const one: One = { n: zero };
const two: Two = { n: { ...one } };
const three: Three = { n: { ...two } };
const four: Four = { n: { ...three } };
const five: Five = { n: { ...four } };
const six: Six = { n: { ...five } };
const seven: Seven = { n: { ...six } };
const eight: Eight = { n: { ...seven } };
const nine: Nine = { n: { ...eight } };
const ten: Ten = { n: { ...nine } };
const eleven: Succ<Ten> = { n: { ...ten } };
const twelve: Succ<Succ<Ten>> = { n: { ...eleven } };
const thirteen: Succ<Succ<Succ<Ten>>> = { n: { ...twelve } };

type Decrement<N> = N extends Succ<infer R> ? R : Zero;
type IsZero<N> = N extends Zero ? true : false;
type IfElse<C extends boolean, T, F> = C extends true ? T : F;

type Equals<A, B> = A extends Succ<infer SA>
  ? B extends Succ<infer SB>
    ? Equals<SA, SB>
    : false
  : A extends Zero
  ? B extends Zero
    ? true
    : false
  : false;

type Add<A, B> = {
  acc: B;
  n: A extends Succ<infer _> ? Add<Decrement<A>, Succ<B>> : never;
}[IfElse<IsZero<A>, "acc", "n">];

type Fibonacci<N, F0 = Zero, F1 = One> = {
  acc: F0;
  n: N extends Succ<infer _> ? Fibonacci<Decrement<N>, F1, Add<F0, F1>> : never;
}[IfElse<Equals<Zero, N>, "acc", "n">];

const fib0: Fibonacci<Zero> = zero;
const fib1: Fibonacci<One> = one;
const fib2: Fibonacci<Two> = one;
const fib3: Fibonacci<Three> = two;
const fib4: Fibonacci<Four> = three;
const fib5: Fibonacci<Five> = five;
const fib6: Fibonacci<Six> = eight;
const fib7: Fibonacci<Seven> = thirteen;

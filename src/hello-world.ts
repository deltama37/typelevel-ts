import type { Equal, Expect, NotAny } from "./utils";

export type HelloWorld = string;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
type cases = [Expect<NotAny<HelloWorld>>, Expect<Equal<HelloWorld, string>>];

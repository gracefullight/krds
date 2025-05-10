import type { PlopTypes } from "@turbo/gen";
import iconGenerator from "./icon";
import tokenGenerator from "./token";

export default function generator(plop: PlopTypes.NodePlopAPI): void {
  tokenGenerator(plop);
  iconGenerator(plop);

  // You can register additional generators here
  // exampleGenerator(plop);
  // componentGenerator(plop);
}

import {test} from "ramda";
import escapeStringRegexp from "escape-string-regexp";

import {TextType} from "./types";

export default function startsWith (subset: TextType | RegExp) {
  return function startsWithSubset (set: TextType): boolean {
    return test(new RegExp(`^${escapeStringRegexp(subset)}`))(set);
  };
}

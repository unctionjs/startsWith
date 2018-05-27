import { test } from "ramda";
import escapeStringRegexp from "escape-string-regexp";
export default function startsWith(subset) {
  const escaped = escapeStringRegexp(subset);
  const ending = `^${escaped}`;
  return function startsWithSubset(set) {
    return test(new RegExp(ending))(set);
  };
}

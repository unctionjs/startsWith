import matchesRegExp from "@unction/matchesregexp";
import escapeStringRegexp from "escape-string-regexp";

export default function startsWith (subset: string) {
  return function startsWithSubset (set: string): boolean {
    return matchesRegExp(new RegExp(`^${escapeStringRegexp(subset)}`))(set);
  };
}

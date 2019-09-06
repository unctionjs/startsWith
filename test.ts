
import startsWith from "./index";

test("works", () => {
  expect(startsWith("I have")("I have no period")).toBeTruthy();
});

test("works", () => {
  expect(startsWith("period.")("I have no period.")).toBeFalsy();
});


import startsWith from "./index";

test(() => {
  expect(startsWith("I have")("I have no period")).toBeTruthy();
});

test(() => {
  expect(startsWith("period.")("I have no period.")).toBeFalsy();
});

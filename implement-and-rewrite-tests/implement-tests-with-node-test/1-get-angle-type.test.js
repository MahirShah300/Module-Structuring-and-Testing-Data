import assert from "node:assert";
import test from "node:test";

import { getAngleType } from "../implement/1-get-angle-type.js";

// TODO: Write tests to cover all cases, including boundary and invalid cases.
// Example: Identify Right Angles

test("Classifies right angles", () => {
  const right = getAngleType(90);
  assert.equal(right, "Right angle");
});

test("Returns invalid angle for less than 0", () => {
  const negative = getAngleType(-10);
  assert.equal(negative, "Invalid angle");
});

test("Returns invalid angle for 0", () => {
  const angle0 = getAngleType(-10);
  assert.equal(angle0, "Invalid angle");
});

test("Returns invalid angle for greater than 360", () => {
  const greater360 = getAngleType(450);
  assert.equal(greater360, "Invalid angle");
});

test("Returns invalid angle for 360", () => {
  const angle360 = getAngleType(360);
  assert.equal(angle360, "Invalid angle");
});

test("Classifies acute angles", () => {
  const acute = getAngleType(34);
  assert.equal(acute, "Acute angle");
});

test("Classifies obtuse angles", () => {
  const obtuse = getAngleType(125);
  assert.equal(obtuse, "Obtuse angle");
});

test("Classifies straight angles", () => {
  const straight = getAngleType(180);
  assert.equal(straight, "Straight angle");
});

test("Classifies reflex angles", () => {
  const reflex = getAngleType(260);
  assert.equal(reflex, "Reflex angle");
});

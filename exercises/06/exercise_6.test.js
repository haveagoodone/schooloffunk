const getAttribute = require("./exercise_6");
const sections = require("../../data/sections.json");

describe("Exercise: 6", () => {
  test("retrieve the id, title and the attribute with the id of 16", () => {
    expect(getAttribute(sections)).toEqual([
      {
        id: 7011147043,
        title: "Tageslichtlampe",
        manufacturer: "Beurer",
      },
      {
        id: 9582398234,
        title: "Alarmanlagen",
        manufacturer: "Homematic IP",
      },
      {
        id: 6238947239,
        title: "Körperfettwaage",
        manufacturer: "Withings",
      },
      {
        id: 3554829938,
        title: "Crosstrainer",
        manufacturer: "Sportstech",
      },
    ]);
  });

  test("do not use [0] to access array values", () => {
    expect(getAttribute.toString().includes("[0]")).toBe(false);
  });
});

const getAdviceAttributes = require("./exercise_8");
const sections = require("../../data/sections.json");

describe("Exercise: 8", () => {
  test("retrieve the id, title, and the name of the first attribute", () => {
    expect(getAdviceAttributes(sections)).toEqual([
      {
        id: 7011147043,
        title: "Tageslichtlampe",
        category: "Anwendungsgebiet",
      },
      {
        id: 9582398234,
        title: "Alarmanlagen",
        category: "Hersteller",
      },
      {
        id: 6238947239,
        title: "Körperfettwaage",
        category: "Gehäusefarbe",
      },
      {
        id: 3554829938,
        title: "Crosstrainer",
        category: "Bremsentyp",
      },
    ]);
  });
});

const { zipIndex, zipFiltered } = require("./exercise_11");
const advices = require("../../data/advices.json");
const sections = require("../../data/sections.json");
const trackingIds = require("../../data/trackingIds.json");

describe("Exercise: 11", () => {
  test("retrieve the id, title, and smallest box art url for every image.", () => {
    expect(zipIndex(advices, trackingIds)).toEqual([
      { adviceId: 70111470, trackingId: 3243 },
      { adviceId: 654356453, trackingId: 1554 },
      { adviceId: 65432445, trackingId: 6443 },
      { adviceId: 675465, trackingId: 9934 },
    ]);
  });

  test("retrieve each advice id, title, the first attribute and the widget of type kauftipp", () => {
    expect(zipFiltered(sections)).toEqual([
      {
        attribute: "Anwendungsgebiet",
        id: 7011147043,
        title: "Tageslichtlampe",
        widget: "TL 30",
      },
      {
        attribute: "Hersteller",
        id: 9582398234,
        title: "Alarmanlagen",
        widget: "WiPro III",
      },
      {
        attribute: "Gehäusefarbe",
        id: 6238947239,
        title: "Körperfettwaage",
        widget: "BF 105",
      },
      {
        attribute: "Bremsentyp",
        id: 3554829938,
        title: "Crosstrainer",
        widget: "Crosstrainer MC300",
      },
    ]);
  });
});

const array2DeeperTree = require("./exercise_10");
const sectionList = require("../../data/sectionList.json");
const rawAdvices = require("../../data/rawAdvices.json");
const attributes = require("../../data/attributes.json");
const trackingIds = require("../../data/trackingIds.json");

describe("Exercise: 10", () => {
  test.only("converting from arrays to deeper trees", () => {
    expect(
      array2DeeperTree(sectionList, rawAdvices, attributes, trackingIds)
    ).toEqual([
      {
        id: 4590843,
        title: "Wohnen",
        url: "/vergleich/wohnen/",
        advices: [
          {
            id: 70111470,
            title: "Tageslichtlampe",
            trackingId: 3243,
            attributes: {
              1: "Anwendungsgebiet",
              2: "Hersteller",
              3: "Produkttyp",
            },
          },
          {
            id: 65435643,
            title: "Alarmanlagen",
            trackingId: 1554,
            attributes: {
              1: "Hersteller",
              2: "Produkttyp",
              3: "Serie",
            },
          },
        ],
      },
      {
        id: 9374938,
        title: "Gesundheit",
        url: "/vergleich/gesundheit/",
        advices: [
          {
            id: 65432445,
            title: "Körperfettwaage",
            trackingId: 6443,
            attributes: {
              1: "Gehäusefarbe",
              2: "Tragfähigkeit",
              3: "Hersteller",
            },
          },
          {
            id: 67546518,
            title: "Crosstrainer",
            trackingId: 9934,
            attributes: {
              1: "Bremsentyp",
              2: "Stromversorgung",
              3: "Hersteller",
            },
          },
        ],
      },
    ]);
  });
});

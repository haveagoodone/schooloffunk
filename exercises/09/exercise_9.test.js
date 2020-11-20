const array2tree = require("./exercise_9");
const sectionList = require("../../data/sectionList.json");
const advices = require("../../data/advices.json");

describe("Exercise: 9", () => {
  test("converting from arrays to trees", () => {
    expect(array2tree(sectionList, advices)).toEqual([
      {
        title: "Wohnen",
        url: "/vergleich/wohnen/",
        advices: [
          {
            id: 70111470,
            title: "Tageslichtlampe",
            url: "https://www.welt.de/vergleich/wohnen/tageslichtlampe-test/",
          },
          {
            id: 654356453,
            title: "Alarmanlagen",
            url: "https://www.welt.de/vergleich/wohnen/alarmanlage-test/",
          },
        ],
      },
      {
        title: "Gesundheit",
        url: "/vergleich/gesundheit/",
        advices: [
          {
            id: 65432445,
            title: "Körperfettwaage",
            url:
              "https://www.welt.de/vergleich/gesundheit/koerperfettwaage-test/",
          },
          {
            id: 675465,
            title: "Crosstrainer",
            url: "https://www.welt.de/vergleich/freizeit/crosstrainer-test/",
          },
        ],
      },
    ]);
  });
});

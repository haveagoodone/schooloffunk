const {
  longestCategoryForeach,
  longestCategoryReduce,
  lastPublishedAdvice,
  getReducedAdvice,
} = require("./exercise_7");
const categories = require("../../data/categories.json");
const advices = require("../../data/advices.json");

describe("Exercise: 7", () => {
  test("retrieve the longest category with forEach", () => {
    expect(longestCategoryForeach(categories)).toBe("KÖRPERPFLEGE");
  });

  test("retrieve the longest category with reduce", () => {
    expect(longestCategoryReduce(categories)).toBe("KÖRPERPFLEGE");
  });

  test("retrieve the last published advice date", () => {
    expect(lastPublishedAdvice(advices)).toBe("2020-11-04T00:00:00.000Z");
  });

  test("reduce the advices to an object => { id, url }", () => {
    expect(getReducedAdvice(advices)).toEqual({
      70111470: "https://www.welt.de/vergleich/wohnen/tageslichtlampe-test/",
      654356453: "https://www.welt.de/vergleich/wohnen/alarmanlage-test/",
      65432445: "https://www.welt.de/vergleich/gesundheit/koerperfettwaage-test/",
      675465: "https://www.welt.de/vergleich/freizeit/crosstrainer-test/",
    });
  });
});

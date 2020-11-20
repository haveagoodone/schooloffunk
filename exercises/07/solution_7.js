/**
 * 1. TASK:
 */
const longestCategoryForeach = (categories) => {
  let maxSize = -1;
  let currentSize = 0;
  let longestCategory;

  categories.forEach((category) => {
    currentSize = category.length;

    if (currentSize > maxSize) {
      longestCategory = category;
      maxSize = currentSize;
    }
  });

  return longestCategory;
};

/**
 * 2. TASK:
 */
const longestCategoryReduce = (categories) => {
  return categories.reduce((acc, category) => {
    return category.length > acc.length ? category : acc;
  });
};

/**
 * 3. TASK:
 */
const lastPublishedAdvice = (advices) => {
  return advices.reduce((acc, advice) => {
    return new Date(advice.date) > new Date(acc) ? advice.date : acc;
  }, "1970-01-01T00:00:00.000Z");
};

/**
 * 4. TASK:
 */
const getReducedAdvice = (advices) => {
  return advices.reduce(
    (acc, advice) => ({ ...acc, ...{ [advice.id]: advice.url } }),
    {}
  );
};

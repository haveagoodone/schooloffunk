/**
 * Reduce
 * Sometimes we need to perform an operation on more than one item in the array
 * at the same time. For example, let's say we need to find the largest integer
 * in an array. We can't use a filter() operation, because it only examines one
 * item at a time. To find the largest integer we need to compare items in the
 * array to each other.
 */

/**
 * One approach could be to select an item in the array as the assumed largest
 * number (perhaps the first item), and then compare that value to every other
 * item in the array. Each time we come across a number that was larger than our
 * assumed largest number, we'd replace it with the larger value, and continue
 * the process until the entire array was traversed.
 *
 * 1. Task:
 * Use forEach() to retrieve the category with the most letters
 */
const longestCategoryForeach = (categories) => {
  // Your code goes here:
};

/**
 * If we replaced the specific size comparison with a closure, we could write a
 * function that handled the array traversal process for us. At each step our
 * function would apply the closure to the last value and the current value and
 * use the result as the last value the next time. Finally we'd be left with
 * only one value. This process is known as reducing because we reduce many
 * values to a single value.
 *
 * 2. Task:
 * Use reduce() to retrieve the category with the most letters
 */
const longestCategoryReduce = (categories) => {
  // Your code goes here:
};

/**
 * 3. Task:
 * Retrieve date of the last published advice
 */
const lastPublishedAdvice = (advices) => {
  // Your code goes here
};

/**
 * 4. Task:
 * Reduce the advices to an object => { id, url }
 */
const getReducedAdvice = (advices) => {
  // Your code goes here
};

module.exports = {
  longestCategoryForeach,
  longestCategoryReduce,
  lastPublishedAdvice,
  getReducedAdvice,
};

/*
 * https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
 */

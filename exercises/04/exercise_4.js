/**
 * TASK:
 * Chain filter() and map() to collect the ids of advices that have a visibility of 5
 */
const functionChaining = (advices) => {
  // Your code goes here:
};

module.exports = functionChaining;

/**
 * ALternative:
 *
 * const onlyVisibilityOfFive = (advice) => advice.visibility === 5;
 *
 * const getAdviceId = (advice) => advice.id;
 *
 * advice
 *   .filter(onlyVisibilityOfFive)
 *   .map(getAdviceId)
 */

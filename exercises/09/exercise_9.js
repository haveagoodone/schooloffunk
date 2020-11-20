/**
 * Tree
 * Information is organized in a tree like a JSON
 * => relationships point from parent to child
 *
 * Array
 * Information is organized in relational systems like databases
 * => relationships point from children to their parents
 *
 * Before, we already know to easily query arrays from trees. Now we are going
 * to query trees from arrays.
 * We have 2 arrays, each containing a list of sections or advice. Each advice
 * has a sectionId field indicating its parent section. We want to build an
 * array of section objects, each with a title, url and an advice array.
 * The advices array will contain the advice id and title and url.
 */

/**
 * TASK:
 * Converting from arrays to trees
 */
const array2tree = (sections, advices) => {
  // Your code goes here:
};

module.exports = array2tree;

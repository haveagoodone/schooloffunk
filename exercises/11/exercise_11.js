const { zipWith } = require("lodash");
const { wrap } = require("../../utils");

/**
 * TASK:
 * Combine advices and trackingIds by index
 */
const zipIndex = (advices, trackingIds) => {
  // Your code goes here:
};

/**
 * TASK:
 * Retrieve each advice id, title, the first attribute and the widget of type kauftipp
 */
const zipFiltered = function (sections) {
  // Your code goes here:
};

/**
 * Helper function
 * ~~~~~~~~~~~~~~~
 * zipWith => lodash.com/docs/4.17.15#zipWith
 *
 * The zip function accepts a combiner function, traverses each array at the
 * same time, and calls the combiner function on the current item on the
 * left-hand-side and right-hand-side. The zip function requires an item from
 * each array in order to call the combiner function, therefore the array
 * returned by zip will only be as large as the smallest input array.
 */

module.exports = {
  zipIndex,
  zipFiltered,
};

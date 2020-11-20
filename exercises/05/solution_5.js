/**
 * 1. TASK:
 */
const withMapAndFlat = (sections) => {
  return sections
    .map((section) => section.advices.map((advice) => advice.id))
    .flat();
};

/**
 * 2. TASK:
 */
const withFlatMap = (sections) => {
  return sections.flatMap((section) =>
    section.advices.map((advice) => advice.id)
  );
};

const getHighVisibility = (advices) => {
  return advices.filter((advice) => advice.visibility === 5);
};

// ALternative:
const onlyVisibilityOfFive = (advice) => advice.visibility === 5;

advices.filter(onlyVisibilityOfFive);

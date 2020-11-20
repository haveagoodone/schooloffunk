const getAdviceAttributes = (sections) => {
  return sections.flatMap((section) => {
    return section.advices.flatMap((advice) => ({
      id: advice.id,
      title: advice.title,
      category: advice.attributes.reduce((acc, attribute) => {
        return acc?.order < attribute.order ? acc : attribute;
      }).name,
    }));
  });
};

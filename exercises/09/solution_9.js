const array2tree = (sections, advices) => {
  return sections.map((section) => {
    return {
      title: section.title,
      url: section.url,
      advices: advices
        .filter((advice) => advice.sectionId === section.id)
        .map((advice) => ({
          id: advice.id,
          title: advice.title,
          url: advice.url,
        })),
    };
  });
};

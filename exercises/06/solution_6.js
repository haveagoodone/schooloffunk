const getAttribute = (sections) => {
  return sections.flatMap((section) => {
    return section.advices.flatMap((advice) => {
      return advice.attributes
        .filter((attribute) => attribute.id === 16)
        .map((attr) => ({
          id: advice.id,
          title: advice.title,
          manufacturer: attr.value,
        }));
    });
  });
};

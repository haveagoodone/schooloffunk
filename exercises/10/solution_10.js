const array2DeeperTree = (sectionList, advices, attributes, trackingIds) => {
  return sectionList.map((section) => {
    return {
      id: section.id,
      url: section.url,
      title: section.title,
      advices: advices
        .filter((advice) => advice.sectionId === section.id)
        .map((advice) => ({
          id: advice.id,
          title: advice.title,
          trackingId: trackingIds.reduce((acc, trackId) => {
            return advice.id === trackId.adviceId ? trackId.trackingId : acc;
          }, 0),
          attributes: attributes
            .filter((attribute) => attribute.adviceId === advice.id)
            .sort((a, b) => a.order < b.order)
            .reduce(
              (acc, attr) => ({ ...acc, ...{ [attr.order]: attr.name } }),
              {}
            ),
        })),
    };
  });
};

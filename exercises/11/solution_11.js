/**
 * 1. Task
 */
return zipWith(advices, trackingIds, (advice, trackingId) => {
  return { adviceId: advice.id, trackingId: trackingId.trackingId };
});

/**
 * 2. Task
 */
return sections.flatMap((section) => {
  return section.advices.flatMap((advice) => {
    return zipWith(
      wrap(
        advice.attributes.reduce((acc, attr) => {
          return acc?.order < attr.order ? acc : attr;
        })
      ),
      advice.widgets.filter((widget) => {
        return widget.type === "kauftipp";
      }),
      (attribute, widget) => {
        return {
          id: advice.id,
          title: advice.title,
          attribute: attribute.name,
          widget: widget.title,
        };
      }
    );
  });
});

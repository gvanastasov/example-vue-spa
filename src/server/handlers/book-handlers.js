const handlers = function () {
  this.post("/books", (schema, request) => {
    const { take, order } = JSON.parse(request.requestBody || "{}");

    let result = schema.books.all();

    if (order) {
      result = result.sort((a, b) => {
        const strategy = {
          asc: () => new Date(a.published) > new Date(b.published),
          desc: () => new Date(a.published) < new Date(b.published),
        };
        return (strategy[order] || strategy.asc)();
      });
    }

    if (take && !isNaN(take)) {
      result = result.slice(0, take);
    }

    return result;
  });
};

export default handlers;

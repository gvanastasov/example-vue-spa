const handlers = function () {
  this.post("/books", (schema) => {
    return schema.books.all();
  });
};

export default handlers;

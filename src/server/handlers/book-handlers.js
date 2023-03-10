const handlers = function () {
  this.get("/books", (schema) => {
    return schema.books.all();
  });
};

export default handlers;

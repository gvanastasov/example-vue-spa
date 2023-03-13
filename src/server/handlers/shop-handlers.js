const handlers = function () {
  this.get("/shops", (schema) => {
    return schema.shops.all();
  });
};

export default handlers;

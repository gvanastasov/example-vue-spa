import { setCookie, getCookie } from "../cookies";

const handlers = function () {
  this.get("/cart", (schema) => {
    const context = ensureContext(schema);
    return context;
  });

  this.post("/cart", (schema, request) => {
    const context = ensureContext(schema);
    const { code } = JSON.parse(request.requestBody);

    context.update("items", [...context.items, code]);

    return context;
  });
};

/**
 * A very suddle implementation of backend context tracking.
 *
 * @param {*} schema
 * @returns
 */
function ensureContext(schema) {
  const rnd = function (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  };
  let contextId = getCookie("context");

  if (!contextId) {
    contextId = rnd(10000, 99999);
    setCookie("context", contextId, 1);
  }

  let context = schema.carts.find(contextId);
  if (!context) {
    context = schema.carts.new({ id: contextId, items: [] });
    context.save();
  }

  return context;
}

export default handlers;

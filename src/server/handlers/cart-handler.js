import { setCookie, getCookie } from "../cookies";

const handlers = function () {
  this.get("/cart", (schema) => {
    const context = ensureContext(schema);
    return context;
  });

  this.post("/cart", (schema, request) => {
    const context = ensureContext(schema);
    const { code } = JSON.parse(request.requestBody);

    const book = schema.books.all().models.find((x) => x.id === code);
    const product = { id: book.id, displayName: book.title, price: book.price };

    context.update({
      items: [...context.items, product],
      priceTotal: {
        value: (
          Number(context.priceTotal.value) + Number(book.price.value)
        ).toFixed(2),
        unit: "€",
      },
    });

    return context;
  });

  this.delete("/cart", (schema, request) => {
    const context = ensureContext(schema);
    const { code } = JSON.parse(request.requestBody);

    const book = context.items.find((x) => x.id === code);

    context.update({
      items: [...context.items.filter((x) => x.id !== code)],
      priceTotal: {
        value: Math.max(
          0,
          Number(context.priceTotal.value) - Number(book.price.value)
        ),
        unit: "€",
      },
    });

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
    context = schema.carts.new({
      id: contextId,
      priceTotal: { value: 0, unit: "€" },
      items: [],
    });
    context.save();
  }

  return context;
}

export default handlers;

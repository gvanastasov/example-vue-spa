import { Response } from "miragejs";

const handlers = function () {
  this.post("/books", (schema, request) => {
    const { take, order, page, pageItemsCount, facets } = JSON.parse(
      request.requestBody || "{}"
    );

    let result = schema.books.all().models;

    const facetsInternal = [
      {
        name: "genre",
        options: result.reduce((arr, book) => {
          let existing = arr.find((x) => x.value === book.genre);
          if (!existing) {
            existing = { value: book.genre, count: 1, active: false };
            arr.push(existing);
          } else {
            existing.count++;
          }
          return arr;
        }, []),
      },
    ];

    if (facets && facets.length) {
      // todo: finish dummy facet
      // const facet = facetsInternal.find(x => x.name === 'genre')
      // result = result.filter(x => x.genre === facet.)
    }

    const total = result.length;

    const filters = {
      take,
    };

    const sorting = {
      order: order ?? "asc",
    };

    const pagination = {
      page: Math.max(0, page ?? 1),
      pages: Math.ceil(total / pageItemsCount),
      pageNext: Math.min(
        Math.max(0, page ?? 1) + 1,
        Math.ceil(total / pageItemsCount)
      ),
      pageItemsCount: pageItemsCount,
    };

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

    if (typeof page !== "undefined" && typeof pageItemsCount !== "undefined") {
      const from = page * pageItemsCount;
      result = result.slice(from, from + pageItemsCount);
    }
    return new Response(
      200,
      {},
      { total, data: result, filters, sorting, pagination, facetsInternal }
    );
  });
};

export default handlers;

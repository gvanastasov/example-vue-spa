import { Model, Factory } from "miragejs";
import { faker } from "@faker-js/faker";

const ENTITY = "book";

const categories = [
  "comedy",
  "action",
  "adventure",
  "fentasy",
  "sci-fi",
  "horror",
];

const model = Model;

const factory = Factory.extend({
  title() {
    return faker.lorem.words();
  },
  description() {
    return faker.lorem.sentence();
  },
  published() {
    return faker.date.recent();
  },
  category() {
    return faker.helpers.arrayElement(categories);
  },
  author() {
    return faker.name.fullName();
  },
});

const seeds = function (server) {
  server.createList(ENTITY, 50);
};

export { ENTITY, model, factory, seeds };

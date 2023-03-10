import { Model, Factory } from "miragejs";
import { faker } from "@faker-js/faker";
import { contentHelper } from "@/utils";

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
    return contentHelper().generateWords({ min: 1, max: 3 }).build();
  },
  description() {
    return faker.lorem.sentence();
  },
  published() {
    return faker.date.recent(3600);
  },
  available() {
    return faker.date.recent(10);
  },
  genre() {
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

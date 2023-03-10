import { Model, Factory } from "miragejs";

const ENTITY = "book";

const model = Model;

const factory = Factory.extend({
  title() {
    return "missing";
  },
  description() {
    return "missing";
  },
  published() {
    return "date";
  },
  category() {
    return "category";
  },
  author() {
    return "author";
  },
});

export { ENTITY, model, factory };

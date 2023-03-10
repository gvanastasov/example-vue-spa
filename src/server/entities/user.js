import { Model, Factory } from "miragejs";
import { faker } from "@faker-js/faker";

const ENTITY = "user";

const model = Model;

const factory = Factory.extend({
  firstName() {
    return faker.name.firstName();
  },
  lastName() {
    return faker.name.lastName();
  },
  email() {
    return `${this.firstName.toLowerCase()}.${this.lastName.toLowerCase()}@example.com`;
  },
  username(i) {
    return `example${i}`;
  },
  password() {
    return "example";
  },
});

export { ENTITY, model, factory };

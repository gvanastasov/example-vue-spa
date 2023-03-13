import { Model, Factory } from "miragejs";
import { faker } from "@faker-js/faker";

const ENTITY = "shop";

const model = Model;

const factory = Factory.extend({
  address() {
    return {
      city: faker.address.city(),
      country: faker.address.country(),
      countryCode: faker.address.countryCode(),
      streetAddress: faker.address.streetAddress(),
    };
  },

  phoneNumber() {
    return faker.phone.number();
  },

  openingHours() {
    return {
      from: "09:00am",
      to: "17:00am",
    };
  },
});

const seeds = function (server) {
  server.createList(ENTITY, 10);
};

export { ENTITY, model, factory, seeds };

import { createServer } from "miragejs";

import * as entities from "./entities";
import * as handlers from "./handlers";

export function run({ environment = "development" } = {}) {
  let server = createServer({
    environment,

    models: {
      ...Object.keys(entities).reduce((models, cur) => {
        const { model, ENTITY } = entities[cur];
        models[ENTITY] = model;
        return models;
      }, {}),
    },

    factories: {
      ...Object.keys(entities).reduce((factories, cur) => {
        const { factory, ENTITY } = entities[cur];
        factories[ENTITY] = factory;
        return factories;
      }, {}),
    },

    seeds(server) {
      const { user } = entities;
      server.create(user.ENTITY, { username: "admin", password: "password" });
      server.createList(user.ENTITY, 5);
    },

    routes() {
      this.namespace = "api";
      Object.keys(handlers).forEach((x) => handlers[x].call(this));
    },
  });

  return server;
}

import { createServer } from "miragejs";

import * as user from "./entities/user";

import userHandlers from "./handlers/user-handlers";

export function run({ environment = "development" } = {}) {
  let server = createServer({
    environment,

    models: {
      ...user.model,
    },

    factories: {
      ...user.factory,
    },

    seeds(server) {
      server.create(user.ENTITY, { username: "admin", password: "password" });
      server.createList(user.ENTITY, 5);
    },

    routes() {
      this.namespace = "api";
      userHandlers.call(this);
    },
  });

  return server;
}

import { createServer, Model, Factory, Response } from "miragejs";
import { faker } from "@faker-js/faker";

const ENTITY = {
  USER: "user",
};

export function run({ environment = "development" } = {}) {
  let server = createServer({
    environment,

    models: {
      [ENTITY.USER]: Model,
    },

    factories: {
      [ENTITY.USER]: Factory.extend({
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
      }),
    },

    seeds(server) {
      server.create(ENTITY.USER, { username: "admin", password: "password" });
      server.createList(ENTITY.USER, 5);
    },

    routes() {
      this.namespace = "api";

      this.get("/users", (schema) => {
        return schema.users.all();
      });

      this.post(
        "/users/login",
        (schema, request) => {
          const { username, password } = JSON.parse(request.requestBody);
          const user = schema.users.findBy({ username, password });

          if (!user) {
            return new Response(401, {}, { error: "Invalid credentials." });
          }

          let now = new Date();
          let cookieExpiration = new Date(now.getTime() + 300 * 1000);
          document.cookie = `auth=true; SameSite=None; Secure; domain=localhost; path=/; expires=${cookieExpiration.toUTCString()};`;

          return user;
        },
        { timing: 3000 }
      );
    },
  });

  return server;
}

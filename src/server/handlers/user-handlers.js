import { Response } from "miragejs";

const handlers = function () {
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
    { timing: 300 }
  );

  this.post("/users/logout", () => {
    document.cookie = `auth=; SameSite=None; Secure; domain=localhost; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT`;
  });
};

export default handlers;

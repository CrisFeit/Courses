import { STATUS_CODES, METHODS } from "node:http";
import { app } from "../app.js";
export default app.route({
  method: "GET",
  url: "/codes",
  schema: {
    headers: {
      type: "object",
      properties: {
        authorization: { type: "string" },
      },
    },
    response: {
      200: {
        type: "object",
        properties: {
          name: { type: "string" },
          price: { type: "number" },
        },
      },
    },
  },
  handler: async (request, reply) => {
    console.log(METHODS);
    console.log(STATUS_CODES);

    return {
      methods: [...METHODS],
      status: STATUS_CODES,
    };
  },
});

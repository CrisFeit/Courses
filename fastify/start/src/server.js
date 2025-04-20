import { app } from "./app.js";
import "./router.js";
const port = Number(process.env.PORT);

app.listen({ port }, (err) => {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
});

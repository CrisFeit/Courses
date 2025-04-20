import Fastify from "fastify";
import cors from "@fastify/cors";

const app = Fastify({ logger: false });
app.register(cors);

export { app };

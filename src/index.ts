import express from "express";

import { usersRoutes } from "./routes/users.routes";
import swaggerUI from "swagger-ui-express"
import swaggerDocument from "./swagger.json"

const app = express();

app.use(express.json());
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument));

app.use("/users", usersRoutes);

export { app };

import express from "express";
import cors from "cors";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import { PORT } from "./config.js";
import indexRoutes from "./routes/index.routes.js";
import taskRoutes from "./routes/task.routes.js";

const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));
console.log(__dirname);

//Middleware
app.use(express.json());
app.use(cors());

//Routes
app.use(indexRoutes);
app.use(taskRoutes);

app.use(express.static(join(__dirname, '../client/dist')));

app.listen(PORT);
console.log(`Serve is listening on port ${PORT}`);

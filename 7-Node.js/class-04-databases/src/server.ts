import express from "express";
import { router } from "./routes";
import { sqliteContection } from "./databases/sqlite3";

const app = express();
const port = 3000;

app.use(router);

app.listen(port, () => {
  console.log(`Server is loading in the port ${port}!`);
});

sqliteContection()
  .then(() => console.log("Database is disconected..."))
  .catch((error) => console.error(error));

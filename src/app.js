import { DbConnection } from "../Db/Connection.js";

import morgan from "morgan";
export const App = (express) => {
  const app = express();
  const port = process.env.PORT;
  if (process.env.mood == "dev") {
    app.use(morgan("dev"));
  }

  app.get("/", (req, res) => res.send("Hello World!"));
  DbConnection();
  app.listen(port, () => console.log(`Example app listening on port ${port}!`));
};

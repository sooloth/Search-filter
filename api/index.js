import express from "express";
import cors from "cors";
const app = express();
import { Users } from "./User.js";
app.use(cors());

app.get("/", (req, res) => {
  const { q } = req.query;

  const keys = ["firstname", "lastname", "email"];

  const search = (data) => {
    return data.filter((item) =>
      keys.some((key) => item[key].toLowerCase().includes(q))
    );
  };
  console.log(q);
  res.json(search(Users).splice(0, 10));
});

app.listen(5000, () => console.log("Listen on port 5000"));

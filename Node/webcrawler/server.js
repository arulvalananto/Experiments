const express = require("express");
const logger = require("morgan");

// const { sendResponse } = require("./utils/helpers");

const app = express();
const port = process.env.PORT || 5000;

app.set("port", port);
app.use(logger("dev"));

app.post("/", async (req, res, next) => {
  try {
    const response = await axios.get(enforceHttpsUrl(req.body.url));
    const data = cheerio.load(response.data);
    res.json({ data });
  } catch (err) {
    res.json({ message: err.message });
  }
});

app.listen(port, () => console.log(`Sever started at ${port}`));

const connectToMongo = require("./db");
connectToMongo();
const express = require("express");
const app = express();
var cors = require("cors");
const port = 5000;

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

app.use(cors());
app.use(express.json());
app.use("/api/auth", require("./routes/auth"));
app.use("/api/notes", require("./routes/notes"));

app.listen(port, () => {
  console.log(
    `Mynotebook backend app listening on port http://localhost:${port}`
  );
});

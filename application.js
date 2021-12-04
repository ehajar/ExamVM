const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
const path = require("path");
const vmRouter = require("./routes/vmRouter");

mongoose.connect(
  "mongodb+srv://ehajar:ehajar@cluster0.wmtk1.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
);

app.use(express.json());
app.use(cors("*"));
app.use(vmRouter);

const PORT = process.env.PORT || 80;

app.listen(PORT, () => {
  console.log(`serveur démarré sous le lien\n\thttp://localhost:${PORT}`);
});

app.use("/", express.static(path.join(__dirname, "code-front")));

app.get("", (req, resp) => {
  resp.sendFile(path.join(__dirname, "code-front", "index.html"));
});

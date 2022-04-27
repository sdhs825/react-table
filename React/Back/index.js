
const express = require("express");

const app = express();
const file=require("./file");
const filter=require("./filter")
const path = require("path");
const port = 8000;


file();
app.get("/",(req,res)=>{
  res.send("hello");
})

app.get("/data", (req, res) => {
  res.sendFile(path.join(__dirname, "output.json"));
});

app.get("/filter",(req,res)=>{
  let unique=filter();
  res.send(unique);
})
app.listen(port, (err) => {
  if (err) console.log(err);
  console.log(`Example listening on port ${port}`);
});


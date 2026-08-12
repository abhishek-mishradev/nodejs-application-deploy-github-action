const express = require("express");

const app = express();
const PORT = process.env.PORT ?? 8080

app.get("/", (req, res) => {
  res.json([
    {
      id: 1,
      name: "abhishek Mishra",
      age: 30,
    },
    {
      id: 2,
      name: "abhi Mishra",
      age: 36,
    },
    {
      id: 3,
      name: "kunjesaAzsdcfvgbnbvfcdxsazsdfh",
      age: 20,
    },
    {
      id: 4,
      name: "abc",
      age: 38,
    },
  ]);
});

app.listen(PORT, () => {
  console.log("hello app is running on 8080 port");
});

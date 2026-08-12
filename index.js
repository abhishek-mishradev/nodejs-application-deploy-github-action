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
    {
      id: 4,
      name: "kunjesh bht bekar hai ,",
      age: 38,
    },
  ]);
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`App is running on port ${PORT}`);
});

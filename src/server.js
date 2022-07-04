// const express = require("express");
import express from "express";
import { connectDB, getDB } from "*/config/mongodb.js";
// import { env } from "*/config/enviroment";
import { BoardModel } from "*/models/board.model.js";

connectDB()
  .then(() => {
    console.log("connect successfully to database!!");
  })
  .then(() => {
    bootServer();
  })
  .catch((error) => {
    console.error(error);
    process.exit();
  });

const bootServer = () => {
  const app = express();
  const PORT = process.env.PORT || 8018;
  // const hostName = "hostname";
  app.get("/test", async (req, res) => {
    res.end("<h1>hello world!!!!!!!!!!11111111111111111</h1>");
  });

  app.listen(PORT, () => {
    console.log(`server is running at localhost:${PORT}/`);
  });
};

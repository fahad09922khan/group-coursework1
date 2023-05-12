const express = require("express");
const ALLOWED_IPS = ["127.0.0.1", "123.456.7.89"];
const api = express.Router();

const lessons = [
    { 'topic': 'Arts and Craft', 'location': 'hendon', 'price': 100 },
    { 'topic': 'Coding', 'location': 'colindale', 'price': 80 },
    { 'topic': 'Games and Fun', 'location': 'brent cross', 'price': 90 },
    { 'topic': 'Music', 'location': 'golders green', 'price': 120 },
];
api.get("/lessons", (req, res) => {
  //   res.send("This is the lessons page");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.send(lessons);
});

const users = {
    email: "abc@gmail.com",
    password: "123$$$123",
};

api.get("/users", (req, res) => {
  //   res.send("This is the users api");
  res.send(users);
});

module.exports = api;

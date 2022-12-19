// const express = require("express");
// const app = express();
// app.get("/",(req,res) => {res.send("Hello World")});
// app.get("/feed",(req,res) => {res.json({title:"Feed GET Request"})});
// app.post("/feed",(req,res) => {res.json({title:"Feed Post Request"})});
// app.put("/feed",(req,res) => {res.json({title:"Feed PUT Request"})});
// app.delete("/feed",(req,res) => {res.json({title:"Feed DELETE Request"})});
// app.listen(3000);

const { ApolloServer } = require("apollo-server");
const { typeDefs } = require("./schema/type-defs");
const { resolvers } = require("./schema/resolvers");

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`YOUR API IS RUNNING AT: ${url} :)`);
});
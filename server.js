var conf  = require("./server/server.conf.js"),
  cors    = require("./server/server.cors.js"),
  express = require("express"),
  morgan  = require("morgan"),
  bodyParser = require("body-parser"),
  mongoose= require("mongoose"),

  server  = express(),
  port    = conf.port,
  host    = conf.host
;

server.use("/", express.static(__dirname + "/public/"));

server.listen(port,host, function(){
  console.log ("Server running on " + port + ":" + host);
});

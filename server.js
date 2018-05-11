const express = require("express");
const bodyParser = require("body-parser");
const methodOverride = require("method-override");


const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(methodOverride("_method"));

let exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

let routes = require('./controllers/burgers_controller.js');

app.use('/', routes);

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
const MySQL = require('mysql');

let burgers = MySQL.createConnection({
	host: "localhost",
	user: "root",
	password: "root",
	database: "burgers_db"
});

let allConnections = {
	'burgersDB' : burgers
};

module.exports = allConnections;
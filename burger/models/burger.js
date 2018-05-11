var orm = require("../config/orm.js");

let burger = {
	show : function(callback){
      orm.selectAll(callback);
	},
	add : function(burgerName, callback){
      orm.insertOne(burgerName, callback);
	},
	update : function(burgerId, callback){
      orm.updateOne(burgerId, callback);
	}
};

module.exports = burger;

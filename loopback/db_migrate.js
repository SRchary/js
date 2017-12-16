var path = require('path');
var fs = require('fs');
var app = require(path.resolve(__dirname, '../server'));
var plsql_ds = app.dataSources.plsqlDS;



plsql_ds.automigrate("location" ,function(err ){
	
	if(err)
		console.log(plsql_ds);
	else
		plsql_ds.disconnect();
	
	
});

plsql_ds.automigrate("school" ,function(err ){
	
	if(err)
		console.log(plsql_ds);
	else
		plsql_ds.disconnect();
	
	
});

plsql_ds.automigrate("ramesh" ,function(err ){
	
	if(err)
		console.log(plsql_ds);
	else
		plsql_ds.disconnect();
	
	
});


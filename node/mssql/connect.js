var sql = require('mssql'); 
var express = require('express');
var app = express();
 
var config = {
    user: 'culibase',
    password: 'Culibdd123',
    server: 'vh4omyemb2.database.windows.net',
    database: 'culibase',
    
    options: {
        encrypt: true // Use this if you're on Windows Azure 
    }
}
 
 app.engine('.html', require('ejs').__express);
 app.set('views', __dirname + '\views');
 app.set('view engine', 'html');
 
var connection = new sql.Connection(config, function(err) {
    // ... error checks 
    
    // Query 
    
    var request = new sql.Request(connection); // or: var request = connection.request(); 
    request.query('select * from test', function(err, recordset) {
        // ... error checks 
        console.log(recordset[0].test);
        console.dir(recordset);
    });
    
	app.get('/', function(req, res){
    res.render('title', {
    title: "EJS example",
  });
});

});

app.listen(80);
console.log();
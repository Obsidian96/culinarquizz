var sql = require('mssql'); 
var express = require('express');
var app = express();
var http = require('http')
var port = process.env.PORT || 1337;
http.createServer(function(req, res) {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World\n');
})
 
var config = {
    user: 'culibase',
    password: 'Culibdd123',
    server: 'vh4omyemb2.database.windows.net',
    database: 'culibase',
    
    options: {
        encrypt: true // Use this if you're on Windows Azure 
    }
}

var users = [
  { name: 'tobi', email: 'tobi@learnboost.com' },
  { name: 'loki', email: 'loki@learnboost.com' },
  { name: 'jane', email: 'jane@learnboost.com' }
];
 
 app.engine('.html', require('ejs').__express);
 app.set('views', __dirname + '\\views');
 app.set('view engine', 'html');
 
var connection = new sql.Connection(config, function(err) 
{
    var request = new sql.Request(connection); // or: var request = connection.request(); 
    request.query('select * from test', function(err, recordset) 
	{
		app.get('/', function(req, res)
		{
			res.render('users', {
			users: users,
			title: recordset[0].test,
			header: "Some users"
			});
		});
    });
});

app.listen(1337);

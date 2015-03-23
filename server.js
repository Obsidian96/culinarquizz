var sql = require('mssql'); 
var express = require('express');
var app = express();
var path = require('path');
//var http = require('http');
var port = process.env.port || 1337;

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
    app.set('views', __dirname + '\\views');
    app.set('view engine', 'html');

    app.use(express.static(path.join(__dirname, 'public')));

    var connection = new sql.Connection(config, function(err) 
    {
    var request = new sql.Request(connection); // or: var request = connection.request(); 
    request.query('select * from test', function(err, recordset) 
    {
      app.get('/', function(req, res)
      {
       res.render('index', {
         title: recordset[0].test,
         header: "Some users"
       });
     });
    });
  });

    app.listen(port);
var sql = require('mssql'); 
 
var config = {
    user: 'culibase',
    password: 'Culibdd123',
    server: 'vh4omyemb2.database.windows.net',
    database: 'culibase',
    
    options: {
        encrypt: true // Use this if you're on Windows Azure 
    }
}
 
var connection = new sql.Connection(config, function(err) {
    // ... error checks 
    
    // Query 
    
    var request = new sql.Request(connection); // or: var request = connection.request(); 
    request.query('select * from test', function(err, recordset) {
        // ... error checks 
        console.log(recordset[0].test);
        console.dir(recordset);
    });
    
    // Stored Procedure 
    
  /*  var request = new sql.Request(connection);
    request.input('input_parameter', sql.Int, 10);
    request.output('output_parameter', sql.VarChar(50));
    request.execute('procedure_name', function(err, recordsets, returnValue) {
        // ... error checks 
        
        console.dir(recordsets);
    });*/
    
});

console.log();
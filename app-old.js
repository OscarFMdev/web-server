
const http = require('http');


http.createServer((req, res) => {
  console.log(req);

  res.writeHead(200, {'Content-Type': 'application/json'});
  let person = {
    hello: 'World',
    number: 10
  }

  res.write(JSON.stringify(person));
  res.end();

  res.setHeader('Content-Disposition', 'attachment; file-name=my-awesome-file.csv')
  res.writeHead(200, {'Content-Type': 'application/csv'})

  res.write('id, name\n');
  res.write('1, John\n');
  res.write('2, Rambo\n');
  res.write('3, Freddie\n');
  res.write('4, Mercury\n');

  res.end();
})
.listen( 8080 )



console.log('Listening port ', 8080);
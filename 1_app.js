const http = require("http");

const hostname = "127.0.0.1";
const port = 3000;

// req: request son todas las peticiones que le hacemos al servidor 
// res: los response son todas las respuestas 
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hola Mundo!\n");
});

// El ` sirve para interpretar strings con variables ${}
server.listen(port, hostname, () => {
  console.log(`Servidor está corriendo sobre http://${hostname}:${port}`);
});

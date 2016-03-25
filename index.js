
// Async
var http = require('http')
var assets = require('./assests.js') 

var port = 3000

var server = http.createServer(function (req, res){
	console.log(req.url)

	switch (req.url) {
	case '/':

		assets.serveStatic('index.html', function (err, content){
			if(err){
				return console.log(err)
			}
			res.end(content)
		})

		break

	case '/css/style.css':

		assets.serveStatic('css/style.css', function (err, content){
			if(err){
				return console.log(err)
			}
			res.end(content)
		})

		break

	case '/js/code.js':

		assets.serveStatic('js/code.js', function (err, content){
			if(err){
				return console.log(err)
			}
			res.end(content)
		})

		break

	default:
		res.statusCode = 404
		res.end('Not found')
		break
}

	
})

server.listen(port, function (err){
	if(err) {
		return console.log('Error al iniciar la app')
	}
	console.log('Servidor iniciado en el puerto: ' + port)
})





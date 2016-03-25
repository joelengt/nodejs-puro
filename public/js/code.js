


function Start(name, callback) {
   var saludo = function(name, ape, callback){
 	  callback(name, ape)
   }
   var err = 'error'
   callback(err, saludo)
}


Start('joel', function (err, saludo){
	saludo('jasmin','gonzales', function (name, ape){
		console.log('¡Hola! soy Joel, Bienvenido: ' + name + ' ' + ape)
	})
})


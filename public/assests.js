module.exports.serveStatic = function serveStatic (name, callback){
	var fs = require("fs");
	fs.readFile("./public/" + name, function (err, data){
		if(err){	
			return callback(err)
		}
		callback(err, data.toString())
	})
}



// Se le coloca un nivel más al exports para poder usar muchos llamados en este modulo
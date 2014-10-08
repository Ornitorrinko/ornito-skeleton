;(function(){

	var Commands = {};
	var baseActionPath = "./actions/";
	var baseModelsPath = __dirname + "/../models";

	Commands.parse = function(desc){
		var available = Commands.available;
		var command = available[desc];
		if(command){
			console.log(command.desc);
			var action = require(baseActionPath + command.module);
			return new action({"outputPath": baseModelsPath});
		}

		throw "Available commands: " + Object.keys(available);
	};

	Commands.available = {
		"init": {
			"module": "initialConfig"
			, "desc": "Use me to initiate a DB configuration. We'll look for a 'db' attribute"
			, "ex": "ornito-skeleton init -c /path/to/your/db/config"
		}
		, "md": {
			"module": "modelGenerator"
			, "desc": "Use me to create a model"
			, "ex": "ornito-skeleton md yourModelName prop:type otherProp:type"
		}
		, "ls": {
			"module": "modelList"
			, "desc": "Use me to list all models"
			, "ex": "ornito-skeleton ls"
		}
	};

	module.exports = Commands;

})();
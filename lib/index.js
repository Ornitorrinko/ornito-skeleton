;(function(){

	var Commands = {};
	var baseActionPath = "./actions/";
	var baseModelsPath = __dirname + "/../models";

	Commands.parse = function(args){
		var available = Commands.available;
		var command = available[args.shift()];
		var options = Commands.buildOptionsParams(Commands.parseOptions(args));

		if(command){
			console.log(command.desc);
			var action = require(baseActionPath + command.module);
			return new action(options);
		}

		throw "Available commands: " + Object.keys(available);
	};

	Commands.buildOptionsParams = function(options){
		var commands = {};
		var _ = require("underscore");
		
		options.forEach(function(option){
			var opt = Commands[option.opt](option.arg);
			commands = _.extend(commands, opt);
		});

		return commands;
	};

	Commands.parseOptions = function(args){
		var options = Commands.options;
		var available = Object.keys(options);
		var currentOptions = [];
		var arguments = args;

		for(var i = 0; i < arguments.length; i++){
			var idx = available.indexOf(arguments[i]);
			if(idx > -1){
				var item = available[idx];
				var next = i + 1;
				
				currentOptions.push({
					"opt": options[item].fn
					, "arg": arguments[next]
				});

				args.splice(next, 1);
				args.splice(i, 1);
			}
		}

		return currentOptions;
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

	Commands.options = {
		"-p": {
			"fn": "getBasePath"
			, "desc": "Define the models base path"
		}
		, "-f": {
			"fn": "withForce"
			, "desc": "Force to the existing files be overwriten"
		}
	};

	Commands.getBasePath = function(pathToParam){
		var path = baseModelsPath;

		if(pathToParam){
			var io = require("./utils/io");
			
			if(!io.exists(pathToParam)){
				io.makeDir(pathToParam);
			}

			path = pathToParam;
		}

		return {"outputPath": path};
	};

	Commands.withForce = function(){
		return {"force": true};
	};

	module.exports = Commands;

})();
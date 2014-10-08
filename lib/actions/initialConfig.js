var InitialConfig = function(init){
	this.outputPath = init.outputPath;
	this.fileName = "index.js";
	this.forcing = init.force;
};

InitialConfig.prototype.run = function(args){
	var params = [].slice.call(args);
	var instruction = params.shift();
	if(!this.isValidInstruction(instruction)){
		throw "Invalid params to init. Check the init command docs!";
	}

	var pathToConfig = params.shift();
	var config = {};
	
	try{
		config = require(pathToConfig);
	}catch(ex){
		console.log("Ornito Error: Cannot find path:", pathToConfig);
		return;
	}

	var template = require("../engines/template");
	var output = template.render("config", 
		{"modelDir": this.outputPath
		, "config": config});
	
	var filePath = this.outputPath + "/" + this.fileName;

	var io = require("../utils/io");

	if(io.exists(filePath)){
		if(this.withForce()){
			io.remove(filePath, writeFile);
		}else{
			console.log("Ornito Alert: A config file already exists! Use -f to overwrite");
			return;
		}
	}else{
		writeFile();
	}

	function writeFile(){
		io.write(filePath, output);
	}

	console.log('Config file:', this.fileName, "created! =)");
};

InitialConfig.prototype.isValidInstruction = function(key){
	return ["-c"].indexOf(key) > -1;
};

InitialConfig.prototype.withForce = function(){
	return this.forcing;
};

module.exports = InitialConfig;
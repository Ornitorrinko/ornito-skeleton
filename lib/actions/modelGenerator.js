//TODO: Improve the template generation
// Allow PK, AI, Associations
var ModelGenerator = function(init){
	this.modelName = "";
	this.properties = [];
	this.outputPath = init.outputPath;
};

ModelGenerator.prototype.run = function(args){

	this.modelName = this.getModelName(args);
	this.properties = this.getProperties(args);
	
	var line = "{{name}}: {type: {{type}} }";
	var attributeList = this.properties.map(function(prop){
		return line.replace("{{name}}", prop.name)
			.replace("{{type}}", prop.typo);
	});

	var template = require("../engines/template");

	var output = template.render("model", 
			{"modelName": this.modelName
			, "properties": attributeList.join(",")}
		);

	var fileName = this.modelName + ".js";
	var filePath = this.outputPath + "/" + fileName; 

	var io = require("../utils/io");
	io.write(filePath, output);

	console.log("Success! file:", fileName, "created =)");
};

ModelGenerator.prototype.getModelName = function(params){
	if(!Array.isArray(params)){
		console.log("Ornito Error: ", "Invalid params:", params);
		throw new Error();
	}

	return params.shift();
};

ModelGenerator.prototype.getProperties = function(params){
	if(!Array.isArray(params)){
		console.log("Ornito Error: ", "Invalid params:", params);
		throw new Error();
	}

	return params.map(function(param){
		var parts = param.split(":");
		var name = "";
		var type = "";
		if(parts.length == 1){
			name = param;
			type = "DataTypes.STRING";
		}else{
			name = parts[0];
			type = "DataTypes." + parts[1].toUpperCase();
		}

		return {
			"name": name
			, "typo": type
		};
	});
};

module.exports = ModelGenerator;
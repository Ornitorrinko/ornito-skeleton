//TODO: Improve the template generation
// Allow PK, AI
var TYPE_DESC = "DataTypes";

var ModelGenerator = function(init){
	this.modelName = "";
	this.properties = [];
	this.outputPath = init.outputPath;
};

ModelGenerator.prototype.run = function(args){

	var self = this;

	this.modelName = this.getModelName(args);
	this.properties = this.getProperties(args);

	var attributeList = this.properties.map(function(prop){
		return self.getLineTemplate(prop);
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
			type = TYPE_DESC + ".STRING";
		}else{
			name = parts[0];
			type = TYPE_DESC + "." + parts[1].toUpperCase();
		}

		return {
			"name": name
			, "typo": type
		};
	});
};

ModelGenerator.prototype.getLineTemplate = function(prop){
	var line = "{{name}}: {type: {{type}} }";

	return line.replace("{{name}}", prop.name)
			.replace("{{type}}", prop.typo);
};

module.exports = ModelGenerator;
var TYPE_DESC = "DataTypes";

var ModelGenerator = function(init){
	this.modelName = "";
	this.properties = [];
	this.outputPath = init.outputPath;
	this.preview = init.preview;
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

	if(this.preview){
		console.info("Preview =>", output);
	}

	if(this.outputPath){
		var fileName = this.modelName + ".js";
		var filePath = this.outputPath + "/" + fileName; 

		var io = require("../utils/io");
		io.write(filePath, output);

		console.log("Success! file:", fileName, "created =)");
	}else{
		return output;
	}
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

	var self = this;

	return params.map(function(param){
		var parts = param.split(":");
		var name = "";
		var type = "";

		if(parts.length == 1){
			name = param;
			type = TYPE_DESC + ".STRING";
		}else{
			name = parts[0];
			type = self.parseTypo(parts[1]);
		}

		return {
			"name": name
			, "typo": type
		};
	});
};

ModelGenerator.prototype.parseTypo = function(typoPart){
	return TYPE_DESC + "." + this.parseModelOptions(typoPart);
};

ModelGenerator.prototype.getLineTemplate = function(prop){
	var line = "{{name}}: {type: {{type}} }";
	return line.replace("{{name}}", prop.name)
		.replace("{{type}}", prop.typo);
};

ModelGenerator.prototype.parseModelOptions = function(typo){
	var flags = { 
		"pk": { "template": "primaryKey: true, allowNull : false" }
		, "ai": { "template": "autoIncrement: true" }
	};

	var _ = require("underscore");
	var parts = typo.split(">");
	var cacheTypo = parts.shift().toUpperCase();

	if(parts.length == 0){
		return cacheTypo;
	}

	var attributes = [];
	parts.forEach(function(part){
		attributes.push(flags[part].template);
	});

	return cacheTypo + ", " + attributes.join(", ");
};

module.exports = ModelGenerator;
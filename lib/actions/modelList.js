var ModelList = function(init){
	this.modelsPath = init.outputPath;
};

ModelList.prototype.run = function(){
	var io = require("../utils/io");
	var files = io
		.readDir(this.modelsPath)
	  	.filter(function(file) {
    		return (file.indexOf('.') !== 0) && (file !== "index.js");
  		});

	console.log("Models: ", files);
};

module.exports = ModelList;
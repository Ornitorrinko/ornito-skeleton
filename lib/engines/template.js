;(function(){

	var fs = require("fs");
	var _ = require("underscore");
	_.templateSettings = {
		interpolate: /\{\{(.+?)\}\}/g
	};
	
	var Template = {};
	var baseTemplatePath = __dirname + "/../../templates/";
	var extension = ".tpl";
	
	Template.render = function(name, obj){
		var compiled = _.template(fs.readFileSync(baseTemplatePath + name + extension).toString());
		return compiled(obj);
	};

	module.exports = Template;
})();
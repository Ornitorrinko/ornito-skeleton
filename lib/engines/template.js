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
		var compiled = _.template(Template.read(baseTemplatePath, name));
		return compiled(obj);
	};

	Template.read = function(path, name){
		return fs.readFileSync(path + name + extension).toString();
	};

	module.exports = Template;
})();
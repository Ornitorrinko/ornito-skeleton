var {{modelName}} = function(sequelize, DataTypes){
	return sequelize.define("{{modelName}}", {
			{{properties}}
		}
		,
		{ 
			tableName : "{{modelName}}"
	    	, timestamps : true
		}
	);
};
module.exports = {{modelName}};
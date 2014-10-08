var product = function(sequelize, DataTypes){
	return sequelize.define("product", {
			title: {type: DataTypes.STRING },name: {type: DataTypes.STRING },price: {type: DataTypes.NUMBER }
		}
		,
		{ 
			tableName : "product"
	    	, timestamps : true
		}
	);
};
module.exports = product;
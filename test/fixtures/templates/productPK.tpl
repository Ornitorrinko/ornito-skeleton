var product = function(sequelize, DataTypes){
	return sequelize.define("product", {
			id: {type: DataTypes.INTEGER, primaryKey: true, allowNull : false },name: {type: DataTypes.STRING },price: {type: DataTypes.NUMBER }
		}
		,
		{ 
			tableName : "product"
	    	, timestamps : true
		}
	);
};
module.exports = product;
var product = function(sequelize, DataTypes){
	return sequelize.define("product", {
			id: {type: DataTypes.INTEGER, autoIncrement: true },name: {type: DataTypes.STRING },price: {type: DataTypes.INTEGER }
		}
		,
		{ 
			tableName : "product"
	    	, timestamps : true
		}
	);
};
module.exports = product;
var product = function(sequelize, DataTypes){
	return sequelize.define("product", {
			id: {type: DataTypes.INTEGER, allowNull: false },name: {type: DataTypes.STRING, allowNull: false },price: {type: DataTypes.INTEGER, allowNull: false }
		}
		,
		{ 
			tableName : "product"
	    	, timestamps : true
		}
	);
};
module.exports = product;
var customer = function(sequelize, DataTypes){
	return sequelize.define("customer", {
			name: {type: DataTypes.STRING },document: {type: DataTypes.NUMBER },age: {type: DataTypes.NUMBER },address: {type: DataTypes.STRING },province: {type: DataTypes.STRING }
		}
		,
		{ 
			tableName : "customer"
	    	, timestamps : true
		}
	);
};
module.exports = customer;
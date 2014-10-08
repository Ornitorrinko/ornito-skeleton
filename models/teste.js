var teste = function(sequelize, DataTypes){
	return sequelize.define("teste", {
			name: {type: DataTypes.STRING },label: {type: DataTypes.STRING },price: {type: DataTypes.NUMBER },-p: {type: DataTypes.STRING },/home/vinone/projects/myModels: {type: DataTypes.STRING }
		}
		,
		{ 
			tableName : "teste"
	    	, timestamps : true
		}
	);
};
module.exports = teste;
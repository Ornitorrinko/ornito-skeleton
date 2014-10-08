module.exports = {
	"createCommand": ["product", "id:integer", "name:string", "price:number"]
	, "createCommandWithPK": ["product", "id:integer>pk", "name:string", "price:number"]
	, "createCommandWithAI": ["product", "id:integer>ai", "name:string", "price:number"]
	, "createCommandWithBoth": ["product", "id:integer>pk>ai", "name:string", "price:number"]
	, "flags": {
		"PK": {
			"key": ">pk"
			, "template": "NUMBER, primaryKey: true, allowNull : false"
		}
		, "AI": {
			"key": ">ai"
			, "template": "NUMBER, autoIncrement: true"
		}
		, "both": {
			"key": ">pk>ai"
			, "template": "NUMBER, primaryKey: true, allowNull : false, autoIncrement: true"
		}
	}
};
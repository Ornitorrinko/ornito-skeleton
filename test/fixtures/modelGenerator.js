module.exports = {
	"createCommand": ["product", "id:integer", "name:string", "price:integer"]
	, "createCommandWithPK": ["product", "id:integer>pk", "name:string", "price:integer"]
	, "createCommandWithAI": ["product", "id:integer>ai", "name:string", "price:integer"]
	, "createCommandWithNN": ["product", "id:integer>nn", "name:string>nn", "price:integer>nn"]
	, "createCommandFull": ["product", "id:integer>pk>ai", "name:string>nn", "price:integer"]
	, "flags": {
		"PK": {
			"key": ">pk"
			, "template": "INTEGER, primaryKey: true, allowNull : false"
		}
		, "AI": {
			"key": ">ai"
			, "template": "INTEGER, autoIncrement: true"
		}
		, "NN": {
			"key": ">nn"
			, "template": "INTEGER, autoIncrement: true"
		}
		, "PKAI": {
			"key": ">pk>ai"
			, "template": "INTEGER, primaryKey: true, allowNull : false, autoIncrement: true"
		}
	}
};
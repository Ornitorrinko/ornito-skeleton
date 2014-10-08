var expect = require("chai").expect;
var fixture = require("./fixtures/modelGenerator");
var templateEngine = require("../lib/engines/template");

describe("ModelGenerator", function(){
	var generator = require("../lib/actions/modelGenerator");
	var model = {};

	beforeEach(function(){
		model = new generator({});
	});

	describe("@run", function(){

		it("should create a simple sequelize schema template", function(){
			expectEquals(fixture.createCommand, "product");
		});

		it("should create a sequelize schema with primary key", function(){
			expectEquals(fixture.createCommandWithPK, "productPK");
		});

		it("should create a sequelize schema with auto increment", function(){
			expectEquals(fixture.createCommandWithAI, "productAI");
		});

		it("should create a sequelize schema with not null fields", function(){
			expectEquals(fixture.createCommandWithNN, "productNN");
		});

		it("should create a sequelize schema with primary key and auto increment", function(){
			expectEquals(fixture.createCommandFull, "productBoth");
		});

		function expectEquals(command, typo){
			var example = templateEngine.read(__dirname + "/fixtures/templates/", typo);
			var template = model.run(command);

			expect(template).to.be.equal(example);
		};

	});

	describe("@parseModelOptions", function(){

		it("should parse the option '>pk'", function(){
			expectEquals(flags("PK"));
		});

		it("should parse the option '>ai'", function(){
			expectEquals(flags("AI"));
		});

		it("should parse the option '>pk>ai'", function(){
			expectEquals(flags("PKAI"));
		});

		function expectEquals(flag){
			expect(buildInvocation(flag)).to.be.equal(flag.template);
		};

		function flags(typo){
			return fixture.flags[typo];
		}

		function buildInvocation(flag){
			var param = "integer" + flag.key;
			return model.parseModelOptions(param);
		};
	});
});
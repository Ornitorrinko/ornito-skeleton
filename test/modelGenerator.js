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

		it("should create a simple sequelize template", function(){
			var command = fixture.createCommand;
			var example = templateEngine.read(__dirname + "/fixtures/templates/", "product");
			var template = model.run(command);

			expect(template).to.be.equal(example);
		});

		it("should create a sequelize with primary key", function(){
			var command = fixture.createCommandWithPK;
			var example = templateEngine.read(__dirname + "/fixtures/templates/", "productPK");
			var template = model.run(command);

			expect(template).to.be.equal(example);
		});

		it("should create a sequelize with auto increment", function(){
			var command = fixture.createCommandWithAI;
			var example = templateEngine.read(__dirname + "/fixtures/templates/", "productAI");
			var template = model.run(command);

			expect(template).to.be.equal(example);
		});

	});

	describe("@parseModelOptions", function(){

		it("should parse the option '>pk'", function(){
			expectEquals(flags("PK"));
		});

		it("should parse the option '>ai'", function(){
			expectEquals(flags("AI"));
		});

		it("should parse the option '>pk>ai'", function(){
			expectEquals(flags("both"));
		});

		function expectEquals(flag){
			expect(buildInvocation(flag)).to.be.equal(flag.template);
		};

		function flags(typo){
			return fixture.flags[typo];
		}

		function buildInvocation(flag){
			var param = "number" + flag.key;
			return model.parseModelOptions(param);
		};
	});
});
;(function(args){
    
    console.log("Ornito Alert: This is an experimental tool! Please do not use it for production purposes");
    
    var cli = require("./lib");
    var action = cli.parse(args);
    var params = [].slice.call(args);

    action.run(params);

})(process.argv.slice(2));
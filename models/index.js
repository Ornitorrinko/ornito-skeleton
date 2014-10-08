var fs        = require('fs')
  , path      = require('path')
  , Sequelize = require('sequelize')
  , sequelize = new Sequelize("myDB"
                , "fake_user"
                , "fake_pass@123"
                ,   {     host            : localhost
                      ,   port            : 3306
                      ,   dialect         : mysql
                      ,   sync            : {force: false}
                      ,   define          : {timestamps: false}
                      ,   timestamps      : false
                      ,   logging         : false
                      ,   freezeTableName : true
                    });

fs
  .readdirSync(__dirname)
  .filter(function(file) {
    return (file.indexOf('.') !== 0) && (file !== "index.js");
  })
  .forEach(function(file) {
    module.exports[model] = sequelize.import(path.join(__dirname, file));
  });

module.exports.sequelize = sequelize;
;(function(){

    var fs = require('fs');
    var p = require('path');

    var IO = {};

    IO.exists = function(path, cb){
        if(cb){
            fs.exists(path, function (exists) {
                cb(exists);
            });
        }else{
            return fs.existsSync(path);
        }
    };

    IO.write = function (path, data, options, cb){
        if(typeof(options) == 'function'){
            cb = options;
            options = undefined;
        }

        options = options || 'utf8';

        if(cb){
            fs.writeFile(path, data, options, function (err) {
                if(err){
                    cb(err);
                }else {
                    cb(null);
                }
            });
        }else{
            fs.writeFileSync(path, data, options);
            return true;
        }
    };

    IO.remove = function(path, cb) {
        if(cb){
            fs.unlink(path, function(err) {
                if(err){
                    cb(err);  
                }else{
                    cb(null, true);  
                } 
            });
        }else{
            fs.unlinkSync(path);
            return true;
        }
    };

    IO.readDir = function(path, cb){
        if(cb){
            fs.readdir(path, function(err, files){
                if(err){
                    cb(err);
                }else{
                    cb(null, files);
                }
            });
        }else{
            return fs.readdirSync(path);
        }
    };

    IO.makeDir = function(path, mode, cb) {
        if(typeof(mode) == 'function'){
            cb = mode;
            mode = undefined;
        }

        mode = mode || '0777';
        if(cb) {
            fs.mkdir(path, mode, function (err) {
                if(err) cb(err);
                else cb(null, true);
            });
        }else{
            fs.mkdirSync(path, mode);
            return true;
        }
    },

    module.exports = IO;

})();
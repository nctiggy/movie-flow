var glob = require('glob');
var exif = require('exiftool');
var fs = require('fs');

exports.allthethings = function(dir, jsonProps, callback) {
	collection = []
	glob(dir, function(err, files) {
		files.forEach (function (file) {
			fs.readFile(file, function(err, data) {
				if (err) return callback(err);
				exif.metadata(data, function(err, metadata) {
					var jsonObj = {};
					jsonObj['name'] = file;
					jsonProps.forEach (function (prop) {
						jsonObj[prop] = metadata[prop];
					});
					collection.push(jsonObj);
					if (collection.length == files.length) {
						callback(null, collection);
					}
				});
			});
		});
	});
}


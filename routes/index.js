var files = require('../modules/files');
/*
 * GET home page.
 */

exports.index = function(req, res){
  files.allthethings('/mnt/movies/iTunes/iTunes Media/**/*.mp4', ['fileSize','duration','title','contentRating','cast','directors','description','longDescription'], function(err, results) {
  	if (err) throw err;
  	res.send(results);
	});

};

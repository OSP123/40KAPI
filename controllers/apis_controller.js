var express = require('express');
var router  = express.Router();
var request = require('request');
var xml2js = require('xml2js');
var parser = new xml2js.Parser();
var catalogue, codexName, categories;
var categoryArr = [];

router.get('/searchCodex/:codex', function(req, res) {
	request(`https://raw.githubusercontent.com/BSData/wh40k/master/${req.params.codex}.cat`, function (error, response, body) {
	  parser.parseString(body, function (err, result) {
	  		codexObj = result.catalogue;
	  		catalogue = codexObj[Object.keys(codexObj)[0]];
	  		categories = codexObj.categoryEntries[0].categoryEntry;
        for (var i = 0; i < categories.length; i++) {
        	var categoryName = categories[i][Object.keys(categories[i])[0]].name;
        	categoryArr.push(categoryName);
        }
        
        res.json(codexObj);
    });
	});
});

module.exports = router;

/**
 * Created by sbunke on 5/18/2015.
 */
var mongojs = require('mongojs');
var db = mongojs('mongodb://test:test@ds037622.mongolab.com:37622/mapreducedb', ['sourceData', 'example1_results']);
//var db = mongojs('mapReduceDB', ['sourceData']);

/*
var gen = require('./generator.js');
gen.generate('male', 8);
console.log(gen);
*/


var example1 = require('./example1.js');
example1.execute();


/*
var sample = gen.dataArray; //[ { "gender": "female" } ];
db.sourceData.insert(sample, function (err, docs) {
    console.log("DB Insert Completed");
});
*/




console.log('running: ' + new Date());
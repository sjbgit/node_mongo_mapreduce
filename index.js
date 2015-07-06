/**
 * Created by sbunke on 5/18/2015.
 */
var mongojs = require('mongojs');
var db = mongojs('mongodb://test:test@ds037622.mongolab.com:37622/mapreducedb', ['sourceData', 'example1_results']);
//var db = mongojs('mapReduceDB', ['sourceData']);

/*
var gen = require('./generator.js');
gen.generate('1_MDTA', 45);
console.log(gen);






var sample = gen.dataArray; //[ { "gender": "female" } ];
db.sourceData.insert(sample, function (err, docs) {
    console.log("DB Insert Completed");
});
*/

/*
var example1 = require('./example1.js');
example1.execute();
*/
/*
var aggr1 = require('./aggr1.js');
aggr1.execute();
*/

/*
var goose1 = require('./goose1.js');
goose1();
*/



console.log('running: ' + new Date());
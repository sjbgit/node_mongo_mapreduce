/**
 * Created by sbunke on 7/6/2015.
 */
var mongojs = require('mongojs');
var db = mongojs('mongodb://test1:test1@ds047782.mongolab.com:47782/testcrud', ['aggregates', 'reduced1', 'example1_results']);//collections that are accessible

var example1 = {};
example1.execute = function () {
    var mapper = function () {
        emit(this.identifier, this.count);
    };

    var reducer = function (gender, count) {
        return Array.sum(count);
    };

    db.aggregates.mapReduce(
        mapper,
        reducer, {
            out: "reduced1", //that added additional
            //out: { merge: 'reduced1'},
            //query: { by: /^[a-z]/},
        },
        outputReduced
    );

    function outputReduced(data) {
        //console.log(data);
        db.reduced1.find(function (err, docs) {
            if (err) console.log(err);
            console.log("\n", docs);
        });
    } 

    //outputReduced();
    /*
    db.reduced1.find(function (err, docs) {
        if (err) console.log(err);
        console.log("\n", docs);
    });
    */
};

module.exports = example1;
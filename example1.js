/**
 * Created by sbunke on 5/18/2015.
 */
var mongojs = require('mongojs');
var db = mongojs('mongodb://test:test@ds037622.mongolab.com:37622/mapreducedb', ['sourceData', 'examplex', 'example1_results']);//collections that are accessible

var example1 = {};
example1.execute = function () {
    var mapper = function () {
        emit(this.gender, 1);
    };

    var reducer = function (gender, count) {
        return Array.sum(count);
    };

    db.sourceData.mapReduce(
        mapper,
        reducer, {
            out: "examplex"
        }
    );

    db.examplex.find(function (err, docs) {
        if (err) console.log(err);
        console.log("\n", docs);
    });
};

module.exports = example1;
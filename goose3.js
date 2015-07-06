/**
 * Created by sbunke on 7/6/2015.
 */
/**
 * Created by sbunke on 7/6/2015.
 */
//http://mongoosejs.com/docs/api.html#model_Model.mapReduce
//https://scotch.io/tutorials/using-mongoosejs-in-node-js-and-mongodb-applications
var mongoose = require('mongoose');
mongoose.connect('mongodb://test1:test1@ds047782.mongolab.com:47782/testcrud');

var aggregateSchema = new mongoose.Schema({
    identifier: { type: String },
    count: { type: Number, min: 0 }
});


var AggregateSchema = mongoose.model('aggregates', aggregateSchema);


var map = function(){
    emit(this.identifier, this.count);
}

// reduce function
var reduce =  function (gender, count) {
    return Array.sum(count);
}


var  o = {
    map: map,
    reduce: reduce,
    out: { replace: 'reducedFromNode2_limit' },
    verbose: true,
    //query: { identifier: /^[7-8]/}
}

AggregateSchema.mapReduce(o, function(err, results, stats) {
    console.log(results);
    console.log('map reduce took %d ms', stats.processtime);
});

/*
var as = new AggregateSchema( { identifier: 'mongoose1', count: 22});

as.save(function(err, thor) {
    console.log(err);
    console.log(thor);
});


AggregateSchema.findOne({ _id: '559b016c898b29c8a123a4e3' }, function(err, thor) {
    if (err) return console.error(err);
    console.dir(thor);

    if (!thor) return;

    thor.remove(function(err) {
        if (err) throw err;

        console.log('thor successfully deleted!');
    })

});
    */
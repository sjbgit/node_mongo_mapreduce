/**
 * Created by sbunke on 7/6/2015.
 */
var mongoose = require('mongoose');
mongoose.connect('mongodb://test1:test1@ds047782.mongolab.com:47782/testcrud');

// map function
var map = function(){
    emit(this.identifier, this.count);
}

// reduce function
var reduce =  function (gender, count) {
    return Array.sum(count);
}


// condition
var query = {};
/*
{

    'field_1' : req.body.field_1,
    'field_2' : req.body.field_2,
    'date_field' : new Date(req.body.date_field),
    'field_3' : { $lte : req.body.field_3 },
    'bool_field': true
}
*/
// map-reduce command
var command = {
    mapreduce: 'aggregates',  //"collection_name", // the name of the collection we are map-reducing
    map: map.toString(), // a function for mapping
    reduce: reduce.toString(), // a function  for reducing
    //query: query, // filter conditions
    //sort: {field_3: 1}, // sorting on field_3 (also makes the reducing process faster)
    out: {inline: 1}  // doesn't create a new collection, includes the result in the output obtained
};

// execute map-reduce command
mongoose.connection.db.executeDbCommand(command, function(err, dbres) {
    if(err) throw err;

    // restrict the results to 15 (you can restrict to any number you want)
    //dbres.documents[0].results.splice(14, dbres.documents[0].results.length-15)

    // sort the map-reduced results on field_3
    //var sortedResults = dbres.documents[0].results.sort(function(current, next){
    //    return current.value.field_3 - next.value.field_3
    //})

    var finalGroupedResult = dbres; // [];

    // clean up the results returned by mapreduce
    /*
    sortedResults.forEach(function(obj, index){
        finalGroupedResult.push(obj.value)
    });
    */
    // render results page
    res.render('view/path/to/render', {
        title: 'Title of the page',
        results: finalGroupedResult
    });
});


/**
 * Created by sbunke on 5/18/2015.
 */

module.exports = (function() {
    var module = {};
    module.dataArray = [];

    var generate = function(type, count) {

        var data = [];

        for (var i = 0; i < count; i++) {
            var item = { "gender": type };
            data.push(item);
        }

        console.log('-------');
        console.log(data);



        module.dataArray = data;
        console.log('++++++++');
        console.log(module.dataArray);


    }

    module.generate = generate;

    //console.log(module);

    return module;
})();

/*
function Generator() {
    var that = this;
    that.dataArray = [];
    //var dataArray = [];
    that.generate = function(type, count) {

        var data = [];

        for (var i = 0; i < count; i++) {
            var item = { "gender": type };
            data.push(item);
        }

        console.log('-------');
        console.log(data);



        that.dataArray = data;
        console.log('++++++++');
        console.log(that.dataArray);


    }

    return {
        data: that.dataArray,
        generate: that.generate
    }
}

var generator = new Generator();
*/
/*
var generator = {
    dataArray: []
};

generator.generate = function(type, count) {

    var data = [];

    for (var i = 0; i < count; i++) {
        var item = { "gender": "' + type '" };
        data.push(item);
    }

    console.log(data);



}
*/

//module.exports = generator;

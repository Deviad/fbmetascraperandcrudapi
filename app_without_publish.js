var express = require('express');

var Scraper = require('./scraper.js');

var scraper = new Scraper();

var Rx = require('rxjs/Rx.js');

var app = express();


app.get('/api/richlinks', function (req, res) {

    var url = req.param('url');

    var scrapedData = scraper.scrape(url);

    /*In case you cannot use from because it look like it has been depcreated you have to use combination of the "of
     operator and the "flatmap operator
     */

    // var requestStream = Rx.Observable.of(scrapedData);
    //
    // var responseStream = requestStream
    //     .flatMap(function(scrapedData) {
    //         return Rx.Observable.fromPromise((scrapedData));
    //     });
    //
    //
    // responseStream.subscribe(
    //     function(response) {res.json(response); },
    //     function (err) { console.log('Error: %s', err); },
    //     function () { console.log('Completed'); }
    // );

    var requestStream = Rx.Observable.from(scrapedData);

    requestStream.subscribe(
        function(response) {res.json(response); },
        function (err) { console.log('Error: %s', err); },
        function () { console.log('Completed'); }
    );


});


app.listen(5100, function () {
  console.log('Example app listening on port 5100!');
});

module.exports = app;

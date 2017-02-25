var express = require('express');

var Scraper = require('./scraper.js');

var Rx = require('rxjs/Rx.js');

var scraper = new Scraper();

var app = express();

var scrapedData = scraper.scrape('http://www.repubblica.it');

var requestStream = Rx.Observable.of(scrapedData);

var responseStream = requestStream
    .flatMap(function(scrapedData) {
        return Rx.Observable.fromPromise((scrapedData));
    });



app.get('/', function (req, res) {

    responseStream.subscribe(function(response) {
       res.json(response);
    });

});


app.listen(5100, function () {
  console.log('Example app listening on port 5100!');
});

module.exports = app;

var express = require('express');

var Scraper = require('./scraper.js');

var scraper = new Scraper();

var Rx = require('rxjs/Rx.js');

var app = express();


app.get('/api/richlinks', function (req, res) {

    var url = req.param('url');

    var scrapedData = scraper.scrape(url);

    var requestStream = Rx.Observable.of(scrapedData);

    var responseStream = requestStream
        .flatMap(function(scrapedData) {
            return Rx.Observable.fromPromise((scrapedData));
        });


    responseStream.subscribe(function(response) {
       res.json(response);
    });

});


app.listen(5100, function () {
  console.log('Example app listening on port 5100!');
});

module.exports = app;

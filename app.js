var express = require('express');

var Scraper = require('./scraper.js');

var scraper = new Scraper();

var Rx = require('rxjs/Rx.js');

var app = express();


app.get('/api/richlinks', function (req, res) {

    var url = req.param('url');

    var scrapedData = scraper.scrape(url);

    var source = Rx.Observable.from(scrapedData);

    var published = source.publish();

    published.subscribe(createObserver('SourceA'));

    var connection = published.connect();

    function createObserver(tag){
        return Rx.Observer.create(
            function(response) {res.json(response); },
            function (err) { console.log('Error: %s', err); },
            function () { console.log('Completed'); }
        );
    }
});


app.listen(5100, function () {
    console.log('Example app listening on port 5100!');
});

module.exports = app;

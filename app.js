var express = require('express');

var Scraper = require('./scraper.js');

var scraper = new Scraper();

var Rx = require('rxjs');

var app = express();


app.get('/api/richlinks', function (req, res) {

    var url = req.param('url');

    var scrapedData = scraper.scrape(url);

    var source = Rx.Observable.from(scrapedData);

    var published = source.publish();

    //useful for polymorfic kind of stuff: add a 'SourceA' argument

    // published.subscribe(createObserver('SourceA'));

    published.subscribe(createObserver());

    //disposable object that I can use later own, more for my own convenience, to remember
    //that this is the connection. Otherwise I could just simply use published.unsubscribe();

    var connection = published.connect();

    //if you need polymorfism place a tag parameter that basically receives SourceA
    // or whatever tag you decide

    // function createObserver(tag){

        function createObserver(){
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

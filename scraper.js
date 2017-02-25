var ogs = require('open-graph-scraper');



var scraper  = function () {

    var self = this;

    self.scrape = function (input_url) {
        var this_url = input_url;
      var myOgs = ogs(
          { url: this_url }, // Settings object first
          function(er, res) { return (er, res); }  // Callback
        );
      return myOgs;
    };
};

module.exports = scraper;

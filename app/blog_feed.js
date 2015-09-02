var request = require('request');
var moment = require('moment');
var xml2js = require('xml2js');
var parser = new xml2js.Parser();

var NodeCache = require( "node-cache" );
var cache = new NodeCache();
var key = 'blog_feed_data';


module.exports = function() {
    var value = cache.get(key);
    if (value) {
        return value;
    } else {
        request('http://blog.therrd.com/feed/', function(err, response, body) {
            if (!err && response.statusCode == 200) {
                parser.parseString(body, function (err, result) {
                    var data = [];
                    var re = /<img.*src\=\"(.*)\?/;
                    ['0', '1', '2'].forEach(function(i) {
                        var item = result.rss.channel['0'].item[i];
                        console.log(item.pubDate[0]);
                        data.push({
                            date: moment(item.pubDate[0], 'ddd, DD MMM YYYY HH:mm:ss').format('Do MMMM YYYY'),
                            link: item.link,
                            title: item.title,
                            image: item['content:encoded'][0].match(re)[1]
                        });
                    });
                    cache.set(key, data, 60 * 60);
                    return data;
                });
            }
        });
    }
};

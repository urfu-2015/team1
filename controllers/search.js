var mongoose = require('../scripts/mongooseConnect.js');
var Quest = require('../models/quests.js').Quest;

module.exports.post = (req, res) => {
    var searchString = req.body.search;
    var searchResults = Quest.search({query_string: {query: searchString}}, (err, result) => {
        try {
            console.log(err, result.hits);
            res.render('search/search.html', {
                title: 'Express',
                searchHits: result.hits.hits,
                total: result.hits.total
            });
        } catch (err) {
            res.send('Скорей всего ты на guest wifi в Яндексе и все порты закрыты');
        }
    });
};

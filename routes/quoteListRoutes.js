module.exports = function (app) {
    var quoteList = require('../controller/quoteListController');

    app.route('/quotes')
        .get(quoteList.scan)
        .post(quoteList.put);
};


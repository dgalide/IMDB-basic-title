const title = require('../models/title');

exports.getTitle = function (req, res) {

    // Find on $text index
    // Only primaryTitle && secondaryTitle are indexed
    title.find({$text: {$search: `"${req.query.name}"`}}).limit(50).exec(function (err, products) {
        if (err) return next(err);
        res.send(products)
    });
};

exports.getAll = function (req, res) {
    const q = title.find({}).limit(50);
    q.exec(function (err, products) {
        if (err) return next(err);
        res.send(products)
    });
};

exports.putTitle = function (req, res) {
    title.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, product) {
        if (err) return next(err);
        res.send('Product udpated.');
    });
};
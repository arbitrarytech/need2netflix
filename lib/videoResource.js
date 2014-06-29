var videoService = require('./videoService');

exports.post = post;

function post(req, res) {
  videoService.create(req.body, function(err) {
    if (err) return res.send(500);
    res.send(200);
  })
}
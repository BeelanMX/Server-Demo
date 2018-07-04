const Node = require('../models').Node;

module.exports = {
  create(req, res) {
    console.log(req)
    return Node
      .create({
        devEUI: req.body.devEUI,
      })
      .then(node => res.status(201).send(node))
      .catch(error => res.status(400).send(error));
  },
};

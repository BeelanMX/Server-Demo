const Node = require('../models').Node;
const Downlink = require('../models').Downlink;

module.exports = {
  create(req, res) {
    return Node
      .create({
        devEUI: req.body.devEUI,
      })
      .then(node => res.status(201).send(node))
      .catch(error => res.status(400).send(error));
  },
  list(req, res) {
  return Node
    .findAll({
      include: [{
        model: Downlink,
        as: 'downlinks'
      }],
    })
    .then(nodes => res.status(200).send(nodes))
    .catch(error => res.status(400).send(error));
  },
  retrieve(req, res) {
    return Node
      .findById(req.params.devEUI, {
        include: [{
          model: Downlink,
          as: 'downlinks',
        }],
      })
      .then(node => {
        if (!node) {
          return res.status(404).send({
            message: 'Node Not Found',
          });
        }
        return res.status(200).send(node);
      })
      .catch(error => res.status(400).send(error));
  },
};

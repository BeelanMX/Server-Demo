const Downlink = require('../models').Downlink;

module.exports = {
  create(req, res) {
    return Downlink
      .create({
        devEUI: req.body.devEUI,
        deviceName: req.body.deviceName,
        time: req.body.time,
        fCnt: req.body.fCnt,
        fCnt: req.body.fCnt,
        data: req.body.data,
      })
      .then(downlink => res.status(201).send(downlink))
      .catch(error => res.status(400).send(error));
  },
};

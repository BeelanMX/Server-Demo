const Nodescontrolls = require('../controllers').nodos;
const DownlinkControlls = require('../controllers').downlinks;
module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the Nodos API!',
  }));

  app.post('/api/nodos', Nodescontrolls.create);
  app.get('/api/nodos', Nodescontrolls.list);
  app.get('/api/nodos/:devEUI', Nodescontrolls.retrieve);

  app.post('/api/downlinks', DownlinkControlls.create);
};

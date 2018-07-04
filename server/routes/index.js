const Nodescontrolls = require('../controllers').nodos;

module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the Nodos API!',
  }));

  app.post('/api/nodos', Nodescontrolls.create);
};

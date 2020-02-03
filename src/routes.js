const { Router } = require('express');

const routes = Router();

routes.post('/users', (req, res) => {
    console.log(req.body);
    res.json({hello: 'world'});
});

module.exports = routes;

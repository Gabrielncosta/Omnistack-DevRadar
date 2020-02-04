const { Router } = require('express');
const axios = require('axios');

const routes = Router();

routes.post('/devs', async (req, res) => {
    const { github_username, techs } = req.body;

    const response = await axios.get(`https://api.github.com/users/${github_username}`)

    const { name = login, avatar_url, bio } = response.data;

    console.log(name, avatar_url, bio, github_username);

    const techsArray = techs.split(',').map(tech => tech.trim());

    
    res.json({hello: response.data });
});

module.exports = routes;

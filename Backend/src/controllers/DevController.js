const axios = require('axios');
const Dev = require('../models/Dev');
const parseStringAsArray = require('../utils/parseStringAsArray');

module.exports = {
  async index(req, res){
    const devs = await Dev.find();

    return res.json(devs);
  },

  async store(req, res) {
    const { github_username, techs, latitude, longitude } = req.body;
  
    let dev = await Dev.findOne({ github_username: github_username });

    if (!dev) {
      const response = await axios.get(`https://api.github.com/users/${github_username}`)
    
      const { name = login, avatar_url, bio } = response.data;
    
      const techsArray = parseStringAsArray(techs);
    
      const location = {
        type: 'Point',
        coordinates: [longitude, latitude],
      }
    
      dev = await Dev.create({
        github_username,
        name,
        avatar_url,
        bio,
        techs: techsArray,
        location
      })
    }
  
    return res.json(dev);
  },

  async update(req, res) {
    const { github_username, techs } = req.body;
  
    let dev = await Dev.findOne({ github_username });

    const techsArray = parseStringAsArray(techs);

    const newDev = await dev.update({
      techs: techsArray,
    })

    return res.json({ newDev });
  },

  async delete(req, res) {
    const { github_username } = req.body;

    let dev = await Dev.findOne({ github_username });

    dev.delete();

    return res.send('Dev deleted');
  }
  
}
const Users = require('./user-models')
const db = require('../../data/db-config')
const express = require('express')

const router = express.Router()


router.get("/", (req, res) => {
    Users.getAll()
      .then(users => {
        res.status(200).json(users);
      })
      .catch(error => {
        res.status(500).json(error);
      });
  });

  router.get("/:id", async (req, res, next) => {
    try{
    const userId = req.params.id;
    const user = await Users.getById(userId);
    res.status(200).json(user);

    }catch(err){
        next(err)
    }
    
  });
  



module.exports = router
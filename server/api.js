'use strict';

const express = require('express');
const asyncify = require('express-asyncify');
const Sequelize = require('sequelize');
const api = asyncify(express.Router());
const Op = Sequelize.Op;

module.exports = function (models) {
  api.get('/consulta/:query', async (req, res, next) => {
    const { query } = req.params;

    let result;
    try {
      result = await models.hammers.findAll({
        where: {
          name: {
            [Op.like]: `%${query}%`
          }
        }
      });
    } catch (e) {
      return next(e);
    }
    res.send(result);
  });

  return api;
};

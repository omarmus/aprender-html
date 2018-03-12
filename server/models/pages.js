'use strict';

const Sequelize = require('sequelize');

module.exports = function (sequelize) {
  const Pages = sequelize.define('pages', {
    id: {
      primaryKey: true,
      autoIncrement: true,
      type: Sequelize.INTEGER
    },
    title: {
      type: Sequelize.STRING
    },
    code: {
      type: Sequelize.STRING,
    },
    settings: {
      type: Sequelize.JSON
    },
    tags: {
      type: Sequelize.JSON
    }
  });

  return Pages;
};

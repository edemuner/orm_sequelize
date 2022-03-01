'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class People extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      People.hasMany(models.Classes, {
        foreignKey: 'professor_id'
      })
      People.hasMany(models.Enrollments, {
        foreignKey: 'student_id',
        scope: { status: 'confirmed' },
        as: 'enrolledClasses'
        // this alias is used to refer to the enrollments associated with a given person
        // here it has a scope, but if only "as" was used, sequelize would return all enrollments, active and inactive
      })
    }
  }
  People.init({
    name: {
      type:DataTypes.STRING,
      validate: {
        validateFunction: function(data){
          if (data.length < 3){
            throw new Error('Field name must have at least 3 characters')
          }
        }
      }
    },
    active: DataTypes.BOOLEAN,
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail:{
          args: true,
          msg: 'Invalid e-mail'
        }
      }
    },
    role: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'People',
    paranoid: true,
    defaultScope: {
      where: { active: true }
    },
    scopes: {
      all: { where: {}}
    }
  });
  return People;
};
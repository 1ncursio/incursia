const DataTypes = require('sequelize');
const { Model } = DataTypes;

module.exports = class Emoticon extends Model {
  static init(sequelize) {
    return super.init(
      {
        // id가 기본적으로 들어있다.
        name: {
          type: DataTypes.STRING(10),
          allowNull: false,
          unique: true,
        },
        src: {
          type: DataTypes.STRING(200),
          allowNull: false,
        },
      },
      {
        modelName: 'Emoticon',
        tableName: 'emoticons',
        charset: 'utf8',
        collate: 'utf8_general_ci',
        sequelize,
      }
    );
  }
  static associate(db) {
    // db.Emoticon.belongsTo(db.Post);
  }
};

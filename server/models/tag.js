const DataTypes = require('sequelize');
const { Model } = DataTypes;

module.exports = class Tag extends Model {
  static init(sequelize) {
    return super.init(
      {
        // id가 기본적으로 들어있다.
        name: {
          type: DataTypes.STRING(30),
          allowNull: false,
        },
      },
      {
        modelName: 'Tag',
        tableName: 'tags',
        charset: 'utf8mb4',
        collate: 'utf8mb4_general_ci', // 이모티콘 저장
        sequelize,
      }
    );
  }
  static associate(db) {
    db.Tag.belongsToMany(db.Post, { through: 'PostTag' });
  }
};

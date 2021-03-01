const DataTypes = require('sequelize');
const { Model } = DataTypes;

module.exports = class User extends Model {
  static init(sequelize) {
    return super.init(
      {
        // id가 기본적으로 들어있다.
        email: {
          type: DataTypes.STRING(30), // STRING, TEXT, BOOLEAN, INTEGER, FLOAT, DATETIME
          allowNull: false, // 필수
          unique: true, // 고유한 값
        },
        nickname: {
          type: DataTypes.STRING(30),
          allowNull: false, // 필수
        },
        profile: {
          type: DataTypes.STRING(200),
        },
        introduction: {
          type: DataTypes.STRING(500),
        },
        password: {
          type: DataTypes.STRING(100),
          allowNull: false, // 필수
        },
        status: {
          type: DataTypes.STRING(15),
          defaultValue: 'pending',
        },
        token: {
          type: DataTypes.STRING(200),
          allowNull: false,
        },
        role: {
          // admin 2
          // manager 1
          // normal 0
          type: DataTypes.INTEGER,
          defaultValue: 0,
        },
      },
      {
        modelName: 'User',
        tableName: 'users',
        charset: 'utf8',
        collate: 'utf8_general_ci', // 한글 저장
        sequelize,
      }
    );
  }
  static associate(db) {
    db.User.hasMany(db.Post);
    db.User.hasMany(db.Comment);
    db.User.belongsToMany(db.Post, { through: 'PostLike', as: 'Liked' });
    db.User.belongsToMany(db.User, {
      through: 'Follow',
      as: 'Followers',
      foreignKey: 'FollowingId',
    });
    db.User.belongsToMany(db.User, {
      through: 'Follow',
      as: 'Followings',
      foreignKey: 'FollowerId',
    });
  }
};

module.exports = (sequelize, DataTypes) => {
  const PostCategory = sequelize.define('PostCategory', {
    postId: {
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    categoryId: {
      primaryKey: true,
      type: DataTypes.INTEGER,
    }
  }, {
    tableName: 'posts_categories',
    underscored: true,
    timestamps: false,
  });

  PostCategory.associate = (models) => {
    models.Category.belongsToMany(models.BlogPost, {
      as: 'blog_posts',
      foreignKey: 'id',
      otherKey: 'id',
      through: PostCategory,
    });

    models.BlogPost.belongsToMany(models.Category, {
      as: 'categories',
      foreignKey: 'id',
      otherKey: 'id',
      through: PostCategory,
    });
  }

  return PostCategory;
}
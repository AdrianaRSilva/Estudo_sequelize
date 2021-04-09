module.exports = (sequelize, DataTypes) => {

    const Post = sequelize.define(
        "Post",{
            texto: DataTypes.STRING
     
            }, {
            tableName: "posts",
            timestamps: false 
            }
    );

         return Post;
  }
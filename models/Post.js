module.exports = (sequelize, DataTypes) => {

    const Post = sequelize.define(
        "Post",{
            texto: DataTypes.STRING,
            img:DataTypes.STRING,
            usuarios_id:DataTypes.INTEGER,
            posts_id:DataTypes.INTEGER
     
            }, {
            tableName: "posts",
            timestamps: false   // guando foi criado ou foi modificado
            }
    );

         return Post;
  }